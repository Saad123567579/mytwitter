'use client'
import React from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { app } from '@/lib/firebase';
import { toast } from 'react-toastify';
import { useAppSelector } from '@/lib/redux/userSlice';
import { trpc } from '../_trpc/client';

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
const Tweet = () => {
    const postCreator = trpc.post.createPost.useMutation();
    const user = useAppSelector((state)=>state?.user?.currentUser)
    const {
        register,
        handleSubmit,
        
    } = useForm<FormData>();;
    type FormData = {
        image: FileList; // Use FileList for file input
        text: string;
      };

    type PostData = {
        image:string,
        body:string,
        userId:string
        
    }
    const onSubmit: SubmitHandler<FormData> = async(data) => {
        const obj:PostData ={
            image:"",body:"",userId:""
        }
        obj.body = data.text
        let uid = user?.id
        if(uid){obj.userId = uid}
      

        console.log(data);
        const storage = getStorage(app);
        const img = data.image[0];
        
    const thumbnailRef = ref(storage, `thumbnail/${img.name}`);
    const thumbnailUploadTask = uploadBytesResumable(thumbnailRef, img);
    await Promise.all([
    new Promise((resolve, reject) => {
        thumbnailUploadTask.on(
          'state_changed',
          (snapshot) => {
            const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // You can update the UI with the progress here if needed.
          },
          async (error) => {
            toast.error('Song uploading failed. Try again');
            reject(error); // Reject the Promise when an error occurs.
            return;
          },
          () => {
            getDownloadURL(thumbnailRef).then((url) => {
              console.log("The thumbnail URL is", url);
              obj.image = url;
              resolve(1); // Resolve the Promise when the download URL is obtained.
            });
          }
        );
      })
    ])

      const createPost = await postCreator.mutateAsync(obj);
      if(createPost.status ==="success") {toast.success("Post Successfully Created");return}
      if(createPost.status ==="failure") {toast.success("InternalServer");return}
        }
  return (
    <div className='w-full h-1/2 '>
        <h1 className='text-white font-bold text-4xl'>Creating A Post</h1>
         <form onSubmit={handleSubmit(onSubmit)} className="bg-black-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-white mb-4">Upload an Image</h1>

        <div className="mb-4">
          <label className="text-white font-semibold" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
           
            className="bg-gray-700 text-white p-2 w-full rounded-lg"
            {...register("image", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label className="text-white font-semibold" htmlFor="text">
            Text
          </label>
          <textarea
            id="text"
            
           
            className="bg-gray-700 text-white p-2 w-full rounded-lg"
            {...register("text", { required: true })}

          />
        </div>

        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>

  )
}

export default Tweet