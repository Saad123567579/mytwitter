import React from 'react'
import {setCurrentPage,setCurrentProfile} from "@/lib/redux/userSlice"
import { useAppSelector } from '@/lib/redux/userSlice'
import { useDispatch } from 'react-redux'
const Rightbar = () => {
    const dispatch = useDispatch();
    const user = useAppSelector((state)=>state?.user?.currentUser)
    const handleClick = async()=> {
        await dispatch(setCurrentPage("profile"));
        await dispatch(setCurrentProfile(user));
        
    }
  return (
    <div className='w-full h-1/4 flex justify-center ' >
    <div className='w-5/6 h-32 mt-4 bg-neutral-800 rounded-lg flex flex-col text-white'>
       {user?(
        <>
         <h1 className='font-semibold text-xl ml-2 mt-2'>Who to follow</h1>
        <div className='flex cursor-pointer rounded-lg p-2 hover:bg-neutral-700' onClick={handleClick}>
            <img src={user?.image} className='rounded-full h-16 ml-2 mt-2' />
            <div className='ml-2 mt-2'>
                <h1 className='font-semibold'>{user?.name}</h1>
                <h1>@{user?.name.toLowerCase()}</h1>
            </div>
        </div>
        </>
       ):(<></>)}

    </div>
    </div>
  )
}

export default Rightbar