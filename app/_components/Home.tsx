import React from 'react'
import { useAppSelector } from '@/lib/redux/userSlice'
import Post from './Post';
const Home = () => {
  const allPosts = useAppSelector((state)=>state?.user?.allPosts);

  
  return (
    <div className='w-full h-full '>
      {!allPosts?.length && <div className='w-full h-full flex justify-center '>
        Loading...
        </div>}

    {allPosts?.length && 
    <div className='w-full h-full flex flex-col justify-start  items-center  '>
      <div className=' w-3/4 h-full flex flex-col justify-start items-center overflow-y-scroll'>
        {allPosts?.map((post)=>(
          <Post postData={post} />
        ))}
      </div>
    </div>
    }    


    </div>
  )
}

export default Home