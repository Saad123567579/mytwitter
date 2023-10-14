import { serverClient } from './_trpc/serverClient';
import Image from 'next/image'
// import { trpc } from './_trpc/client'


import Sidebar from './_components/Sidebar';
export default async function Home() {
  // const getTodos = await serverClient.post.create({title:"Saad"});

  
  return (
    <div  className="flex h-screen w-full">
    <div className='h-full w-1/5  '>
      <Sidebar/>
    </div>
    <div className='h-full w-4/5 '>s</div>
    </div >

  )
}
