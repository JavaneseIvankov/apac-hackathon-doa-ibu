'use server';

import { destroySession } from '@/features/session-manager/action';
import { fetchApi } from '@/shared/lib/api/fetcher';
import { env } from '@/shared/lib/env/env';
import {
   TRegisterRequest,
   TVerifyOTPRequest,
   TVerifyOTPResponse,
   TLoginRequest,
   TLoginResponse,
   TRegisterResponse,
} from './dto';

export const login = async (payload: TLoginRequest) => {
   const res = await fetchApi<TLoginResponse>(`${env.API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'include',
   });
   console.log(JSON.stringify(payload));
   return res;
};

// This will not actually register the user,
// it will return message that otp has been sent to the user's email
// after that the user needs to fill otp,
// so you may call this as sendOTP(...)
export const register = async (payload: TRegisterRequest) => {
   const res = await fetchApi<TRegisterResponse>(
      `${env.API_URL}/auth/register`,
      {
         method: 'POST',
         body: JSON.stringify(payload),
         credentials: 'include',
      }
   );
   return res;
};

export const verifyOTP = async (payload: TVerifyOTPRequest) => {
   const res = await fetchApi<TVerifyOTPResponse>(
      `${env.API_URL}/auth/verify-otp`,
      {
         method: 'POST',
         body: JSON.stringify(payload),
         credentials: 'include',
      }
   );
   return res;
};

export const logout = async () => {
   await destroySession();
};
