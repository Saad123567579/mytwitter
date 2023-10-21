import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { prisma } from '@/prisma/prismaClient';

export const postRouter = router({
    createPost: publicProcedure
        .input(
            z.object({
                image:z.string(),
                body:z.string(),
                userId:z.string()
            }),
        )
        .mutation(async(opts) => {
            console.log(opts.input);
            const {image,body,userId} = opts.input
            const createPost = await prisma.post.create({
                data: {
                   image,body,userId
                }, 
            });
            if(createPost){ 
                return {status:"success",payload:createPost,msg:"Post Successfully Created"}
            }
            return {status:"failure",payload:{},msg:"Internal Server Error"}

        }),
   
});