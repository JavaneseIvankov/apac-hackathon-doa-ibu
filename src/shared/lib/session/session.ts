import type { SessionOptions } from 'iron-session';
import { env } from '../env/env';

export type TSessionData = {
   id?: string;
   name?: string;
   email?: string;
   accessToken?: string;
   refreshToken?: string;
   isLoggedIn: boolean;
};

export const defaultSession = {
   isLoggedIn: false,
};

export const sessionOpt: SessionOptions = {
   cookieName: 'app-cookie',
   password: env.SESSION_SECRET,
   cookieOptions: {
      secure: process.env.NODE_ENV == 'production',
   },
};
