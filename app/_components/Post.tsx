import React from 'react';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegCommentDots, FaShare } from "react-icons/fa";
import {setCurrentPage,setCurrentProfile} from "@/lib/redux/userSlice"
import { useDispatch } from 'react-redux';
import { trpc } from '../_trpc/client';
interface PostData { body: string, id: string, image: string, createdAt: string, updatedAt: string, userId: string, user: { id: string, name: string, email: string, image: string } }
interface PostProps {
  postData: PostData;
}

const Post: React.FC<PostProps> = ({ postData }) => {
  const dispatch = useDispatch();
  const getUser = trpc.user.getUserById.useMutation();
  const handleCurrentProfile = async () => {
    let u = await getUser.mutateAsync(postData.user.id)
    if(u){
      await dispatch(setCurrentPage("profile"));
      await dispatch(setCurrentProfile(u.payload));
    }

  }
  return (
    <div className='bg-neutral-800 rounded-lg w-3/4 h-full  m-4 flex flex-col'>
      <div className='flex justify-start items-center w-full h-20 cursor-pointer hover:bg-neutral-900 rounded-lg' onClick={handleCurrentProfile}>
        <img src={postData?.user?.image} className='rounded-full w-16 h-16 ml-2' />
        <h1 className='font-semibold text-xl ml-2'>{postData?.user?.name}</h1>
      </div>
      <p className='text-sm mb-2'>{postData?.body}</p>
      <img src={postData?.image} className='w-full h-96 rounded-lg' />
      <div className='flex justify-evenly items-center'>
        <button className='cursor-pointer p-2 hover:bg-neutral-950 h-full w-full flex justify-center items-center'>< AiOutlineLike className="text-4xl" /></button>
        <button className='cursor-pointer p-2 hover:bg-neutral-950 h-full w-full flex justify-center items-center'><FaRegCommentDots className="text-4xl" /></button>
        <button className='cursor-pointer p-2 hover:bg-neutral-950 h-full w-full flex justify-center items-center'><FaShare className="text-4xl" /></button>
      </div>
    </div>
  );
};

export default Post;
