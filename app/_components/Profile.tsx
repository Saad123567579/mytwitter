import React from 'react'
import { useAppSelector } from '@/lib/redux/userSlice'
import { setCurrentPage,setCurrentProfile } from '@/lib/redux/userSlice';
import {BiArrowBack} from "react-icons/bi";
import { useDispatch } from 'react-redux';
//comment
const Profile = () => {
    const dispatch = useDispatch();
    const currentProfile = useAppSelector((state)=>state?.user?.currentProfile);
    const handleHome = async() => {
        await dispatch(setCurrentPage("home"));
        await dispatch(setCurrentProfile(null));
    }

  return (
    <div className='w-full h-full '>
        <div className='flex flex-row m-2'>
            <BiArrowBack className="font-bold text-2xl mt-1 ml-2 rounded-full  hover:bg-neutral-800 cursor-pointer" onClick={handleHome}/> 
            <h1 className="font-bold text-2xl ml-2">{currentProfile?.name}</h1>
        </div>
        <div className='w-7/8 h-44 bg-neutral-800'> </div>
        <img src={currentProfile?.image} className='rounded-full h-32 w-32 border-2 relative bottom-20 left-5 bg-white' />
        <div className='relative bottom-20 m-8'>
            <h1 className='font-bold text-4xl'>{currentProfile?.name}</h1>
            <h1 className='font-semibold text-xl text-neutral-600'>@{currentProfile?.name}</h1>
            <div className='flex'>
                <div className='flex m-2'><h1 className='text-white'>{currentProfile?.followedIds?.length}</h1> <h1 className='text-neutral-600 ml-2'>following</h1></div>
                <div className='flex m-2'><h1 className='text-white'>{currentProfile?.followingIds?.length}</h1> <h1 className='text-neutral-600 ml-2'>followers</h1></div>
            </div>
        </div>
       


    </div>
  )
}

export default Profile