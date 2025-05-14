import { BaseApiResponse } from '@/shared/lib/api/api';
import { z } from 'zod';

export const TLoginSchema = z.object({
   email: z.string().email('Must be a valid email!'),
   password: z.string().min(8),
   rememberMe: z.boolean(),
});

export type TLoginRequest = z.infer<typeof TLoginSchema>;

export interface TLoginResponse extends BaseApiResponse {
   payload: {
      accessToken: string;
      refreshToken: string;
   };
}

export const TRegisterSchema = z.object({
   email: z.string().email('Must be a valid email'),
   password: z.string().min(8),
});

export type TRegisterRequest = z.infer<typeof TRegisterSchema>;

export type TRegisterResponse = BaseApiResponse;

export const TVerifyOTPSchema = z.object({
   email: z.string().email('Must be a valid email'),
   otp: z.string().length(6, 'OTP must be 6 characters'),
});

export type TVerifyOTPRequest = z.infer<typeof TVerifyOTPSchema>;

export interface TVerifyOTPResponse extends BaseApiResponse {
   payload: {
      accessToken: string;
      refreshToken: string;
   };
}
