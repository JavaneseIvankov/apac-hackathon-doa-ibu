import { z } from 'zod';

const envSchema = z.object({
   APP_URL: z.string().min(1),
   API_URL: z.string().min(1),
   SESSION_SECRET: z.string().min(32),
});

function validateEnv() {
   const env = process.env;
   const result = envSchema.safeParse(env);
   if (!result.success) {
      console.log(env);
      throw new Error(result.error.message);
   }
   return result.data;
}

export const env = validateEnv();

export type Env = z.infer<typeof envSchema>;
