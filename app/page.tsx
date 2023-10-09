import { serverClient } from './_trpc/serverClient';
import Image from 'next/image'
// import { trpc } from './_trpc/client'
export default async function Home() {
  const getTodos = await serverClient.post.create({title:"Saad"});

  
  return (
    <>twitter</>
  )
}
