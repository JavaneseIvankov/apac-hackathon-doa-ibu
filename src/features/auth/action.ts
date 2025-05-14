'use server';

import { destroySession } from '@/features/session-manager/action';
import { fetchApi } from '@/shared/lib/api/fetcher';
import { env } from '@/shared/lib/env/env';
import {
   TRegisterRequest,
   TVerifyOTPRequest,
   TVerifyOTPResponse,
   TLoginRequest,
} from './dto';

export const login = async (payload: TLoginRequest) => {
   const res = await fetchApi<TLoginRequest>(`${env.API_URL}/api/v1/login`, {
      body: JSON.stringify(payload),
   });
   return res;
};

export const register = async (payload: TRegisterRequest) => {
   const res = await fetchApi<TRegisterRequest>(
      `${env.API_URL}/api/v1/register`,
      {
         body: JSON.stringify(payload),
      }
   );
   return res;
};

export const verifyOTP = async (payload: TVerifyOTPRequest) => {
   const res = await fetchApi<TVerifyOTPResponse>(
      `${env.API_URL}/api/v1/verify-otp`,
      {
         body: JSON.stringify(payload),
      }
   );
   return res;
};

export const logout = async () => {
   await destroySession();
};
