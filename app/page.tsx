"use client"
import { useEffect } from 'react';
import { serverClient } from './_trpc/serverClient';
import Image from 'next/image'
// import { trpc } from './_trpc/client'//
import { setCurrentUser , setAllPosts} from '@/lib/redux/userSlice';
import { useDispatch } from 'react-redux';
import Sidebar from './_components/Sidebar';
import Rightbar from './_components/Rightbar';
import Hom from './_components/Home';
import Profile from './_components/Profile';
import Tweet from './_components/Tweet';
import { useAppSelector } from '@/lib/redux/userSlice';
import { trpc } from './_trpc/client';

export default function Home() {
  function shuffleArray(array:any) {
    const shuffledArray = [...array]; // Create a new array to avoid modifying the original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  const dispatch = useDispatch();
  const page = useAppSelector((state)=>state?.user?.currentPage)

  const allPosts =  trpc.post.getAllPosts.useMutation();
  useEffect(() => {
    const getPosts = async() => {
      const d= await allPosts.mutateAsync();
      await dispatch(setAllPosts(shuffleArray(d.payload)));
    
    }
    getPosts();
   
  }, [])
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
      {page==="tweet" && <Tweet/>}

    </div>
    <div className='h-full w-1/5 border-l-2 b-1'><Rightbar/></div>

    </div >

  )
}
