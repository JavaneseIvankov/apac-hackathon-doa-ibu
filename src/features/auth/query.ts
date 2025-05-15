import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, logout, register, verifyOTP } from './action';
import { useRouter } from 'next/navigation';
import { createSession } from '../session-manager/action';
import { TLoginRequest, TRegisterRequest, TVerifyOTPRequest } from './dto';
import logger from '@/shared/lib/logger/logger';
import { useRef } from 'react';

export const useRegisterMutation = () => {
   const emailRef = useRef(''); // Use ref to presist closure value accross renders

   const setEmail = (email: string) => {
      logger.debug('[useRegisterMutation/setEmail] setting _email to ' + email);
      emailRef.current = email;
   };

   const r = useRouter();

   return useMutation({
      mutationKey: ['auth'],
      mutationFn: (data: TRegisterRequest) => {
         setEmail(data.email);
         logger.debug('[useRegisterMutation] Registering user', {
            email: data.email,
         });
         return register(data);
      },
      onSuccess: (res) => {
         if (!res.ok) {
            setEmail('');
            logger.warn('[useRegisterMutation] Registration failed', {
               message: res.message,
            });
            alert(res.message);
            return;
         }
         logger.info(
            '[useRegisterMutation] Registration successful, redirecting to /verify-otp',
            {
               email: emailRef.current,
            }
         );
         r.push(`/verify-otp?email=${emailRef.current}`);
      },
   });
};

export const useOtpMutation = () => {
   const qc = useQueryClient();
   const r = useRouter();
   return useMutation({
      mutationKey: ['auth'],
      mutationFn: (data: TVerifyOTPRequest) => {
         logger.debug('[useOtpMutation] Verifying OTP', { data });
         return verifyOTP(data);
      },
      onSuccess: async (res) => {
         if (!res.ok) {
            logger.warn('[useOtpMutation] OTP verification failed', {
               message: res.message,
            });
            alert(res.message);
            return;
         }
         logger.info(
            '[useOtpMutation] OTP verification successful, creating session'
         );
         await createSession(
            res.data.payload.access_token,
            res.data.payload.refresh_token
         );

         logger.info('[useOtpMutation] Redirecting to /home');
         r.push('/home');
         qc.refetchQueries({ queryKey: ['auth'] });
      },
   });
};

export const useLogoutMutation = () => {
   const qc = useQueryClient();
   const r = useRouter();

   return useMutation({
      mutationKey: ['auth'],
      mutationFn: () => {
         logger.debug('[useLogoutMutation] Logging out user');
         return logout();
      },
      onSuccess: () => {
         logger.info('[useLogoutMutation] Logout successful, redirecting to /');
         r.replace('/');
         qc.resetQueries({ queryKey: ['auth'] });
      },
   });
};

export const useLoginMutation = () => {
   const qc = useQueryClient();
   const r = useRouter();

   return useMutation({
      mutationKey: ['auth'],
      mutationFn: (data: TLoginRequest) => {
         logger.debug('[useLoginMutation] Logging in user', {
            email: data.email,
         });
         return login(data);
      },
      onSuccess: async (res) => {
         if (!res.ok) {
            logger.warn('[useLoginMutation] Login failed', {
               message: res.message,
            });
            alert(res.message);
            return;
         }
         logger.info('[useLoginMutation] Login successful, creating session');
         await createSession(
            res.data.payload.access_token,
            res.data.payload.refresh_token
         );

         logger.info('[useLoginMutation] Redirecting to /home');
         r.push('/home');
         qc.refetchQueries({ queryKey: ['auth'] });
      },
   });
};
