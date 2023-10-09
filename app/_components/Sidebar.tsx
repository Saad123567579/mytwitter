import React from 'react'
import {BsTwitter} from "react-icons/bs";
import {IoIosNotifications} from "react-icons/io";
import {AiFillHome} from "react-icons/ai";
import {LuLogOut} from "react-icons/lu";
import {CgProfile} from "react-icons/cg";
const Sidebar = () => {

  return (
    <div className='w-full h-full flex flex-col justify-start m-2 text-white border-r-2'>
        <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg'>
        <BsTwitter className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Twitter</h1>
        </div>
        <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg'>
        <AiFillHome className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Home</h1>
        </div>
        <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg'>
        <IoIosNotifications className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Notification</h1>
        </div>
        <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg'>
        <CgProfile className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Profile</h1>
        </div>
        <div className='flex p-2 cursor-pointer hover:bg-neutral-900 rounded-lg'>
        <LuLogOut className="text-2xl " />
        <h1 className='font-bold ml-2 text-2xl'>Logout</h1>
        </div>
        <button className='p-2 bg-blue-500 hover:bg-blue-600 mr-2 rounded-l-full rounded-r-full font-semibold w-6/8'>Tweet</button>
    </div>
  )
}

export default Sidebar