import { router } from '../trpc';
import { z } from 'zod';
 
import { todoRouter } from './todo';
import { postRouter } from './post';
 
export const appRouter = router({
  todo: todoRouter, // put procedures under "user" namespace
  post: postRouter, // put procedures under "post" namespace
})

export type AppRouter = typeof appRouter;
