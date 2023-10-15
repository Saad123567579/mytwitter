import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { prisma } from '@/prisma/prismaClient';

export const userRouter = router({
    createUser: publicProcedure
        .input(
            z.object({
                email: z.union([z.string(), z.nullable(z.string())]),
                id: z.union([z.string(), z.nullable(z.string())]),
                image: z.union([z.string(), z.nullable(z.string())]),
                name: z.union([z.string(), z.nullable(z.string())]),
            }),
        )
        
        .mutation(async (opts) => {
            const{id,image,name,email} = opts.input;
            if (id && image && name && email) {
                const checkUser = await prisma.user.findUnique({
                    where: { email: email },
                });
                if (!checkUser) {
                    const createUser = await prisma.user.create({
                        data: {
                            name:name,
                            email:email,
                            image:image
                        }, 
                    });

                    if(createUser){ 
                        return {status:"success",payload:createUser,msg:"User Successfully Created"}
                        
                    }
                }
                
                return {status:"success",payload:checkUser,msg:"Welcome back"}

            }
           
            return {status:"failure",payload:{},msg:"Internal Server Error"}

        }),
});

