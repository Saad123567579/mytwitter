"use client"
import { useEffect } from 'react';
import { serverClient } from './_trpc/serverClient';
import Image from 'next/image'
// import { trpc } from './_trpc/client'//
import { setCurrentUser } from '@/lib/redux/userSlice';
import { useDispatch } from 'react-redux';
import Sidebar from './_components/Sidebar';
import Rightbar from './_components/Rightbar';
import Hom from './_components/Home';
import Profile from './_components/Profile';
import { useAppSelector } from '@/lib/redux/userSlice';
export default function Home() {
  const page = useAppSelector((state)=>state?.user?.currentPage)

  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async()=> {
      let data = localStorage.getItem("user");
    if(data){
      data = JSON.parse(data);
      await dispatch(setCurrentUser(data));
      
    }
    }
    getUser();
  }, [])
  

  // const getTodos = await serverClient.post.create({title:"Saad"});

  
  return (
    <div  className="flex h-screen w-full">
    <div className='h-full w-1/5  '>
      <Sidebar/>
    </div>
    <div className='h-full w-3/5 '>
      {page==="home" && <Hom/>}
      {page==="profile" && <Profile/>}
    </div>
    <div className='h-full w-1/5 border-l-2 b-1'><Rightbar/></div>

    </div >

  )
}
