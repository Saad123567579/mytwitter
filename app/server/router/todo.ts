import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
export const todoRouter = router({
  list: publicProcedure.query(() => {
    // [..]
    return [];
  }),
});