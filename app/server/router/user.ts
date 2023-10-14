import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

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
        .mutation((opts) => {
            console.log(opts.input);
            return;
            // [...]
        }),
});
