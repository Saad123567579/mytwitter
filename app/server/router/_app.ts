import { router } from '../trpc';
 
import { todoRouter } from './todo';
import { postRouter } from './post';
import { userRouter } from './user';
export const appRouter = router({
  todo: todoRouter, // put procedures under "user" namespace
  post: postRouter, // put procedures under "post" namespace
  user: userRouter

})

export type AppRouter = typeof appRouter;
