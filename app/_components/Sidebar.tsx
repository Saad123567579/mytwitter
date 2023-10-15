'use client'
import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '../../lib/firebase';
import { trpc } from '../_trpc/client';
import {toast} from "react-toastify"
import {useRouter} from 'next/navigation';
import { useAppSelector } from '@/lib/redux/types';
const Sidebar = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const userCreator = trpc.user.createUser.useMutation();
  const user = useAppSelector((state)=>state?.user?.currentUser)

  const handleLogin = async () => {
    console.log("clicked");
    try {
      const { user } = await signInWithPopup(firebaseAuth, provider);
      let obj = {
        email: user.email,
        id: user.uid,
        image: user.photoURL,
        name: user.displayName,
      };
      
      const res = await userCreator.mutateAsync(obj);
      if(res.status=="failure"){
        toast.error(res.msg)
      }
      if(res.status=="success"){
        toast.success(res.msg)
        localStorage.setItem("user",JSON.stringify(res.payload))
        setTimeout(()=>{window.location.href="/"},1000)
      }
      

      console.log(obj);
    } catch (e) {
      console.log("An error has occurred ", e);
    }
  }

  const handleLogout = async() => {
    if(localStorage.getItem('user')){
      localStorage.removeItem("user");
      window.location.href="/"
    }
  }

  return (
    <div className='w-full h-full flex flex-col justify-start m-2 text-white border-r-2'>
      <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg mb-2'>
        <BsTwitter className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Twitter</h1>
      </div>
      <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg mb-2'>
        <AiFillHome className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Home</h1>
      </div>
      <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg mb-2'>
        <IoIosNotifications className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Notification</h1>
      </div>
      <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg mb-2'>
        <CgProfile className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Profile</h1>
      </div>
      <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg mb-2'>
        <LuLogOut className="text-2xl " />
        {user?
        ( <h1 className='font-bold ml-2 text-2xl' onClick={handleLogout}>Logout</h1>)
        :
        ( <h1 className='font-bold ml-2 text-2xl' onClick={handleLogin}>Login</h1>)
        }
       
      </div>
      <button className='p-2 bg-twitter-blue hover:bg-blue-400 mr-2 rounded-l-full rounded-r-full font-semibold w-6/8'>Tweet</button>
      {user?(
        <button className='p-2 bg-twitter-blue hover:bg-blue-400 mr-2 mt-2 mb-8 rounded-l-full rounded-r-full font-semibold w-6/8'>
       Welcome {user?.name}
       </button>
      ):(
<button className='p-2 bg-twitter-blue hover:bg-blue-400 mr-2 mt-2 mb-8 rounded-l-full rounded-r-full font-semibold w-6/8'>
       Please Login
       </button>
      )}
      

    </div>
  )
}

export default Sidebar