import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, logout, register, verifyOTP } from './action';
import { useRouter } from 'next/navigation';
import { createSession } from '../session-manager/action';
import { TLoginRequest, TRegisterRequest, TVerifyOTPRequest } from './dto';

export const useRegisterMutation = () => {
   const r = useRouter();
   return useMutation({
      mutationKey: ['auth'],
      mutationFn: (data: TRegisterRequest) => register(data),
      onSuccess: (res) => {
         if (!res.ok) {
            console.log(res.message);
            alert(res.message);
            return;
         }
         console.log('redirecting to /verify-otp');
         r.push('/verify-otp');
      },
      onError: (e) => {
         console.log(e.message);
      },
   });
};

export const useOtpMutation = () => {
   const qc = useQueryClient();
   const r = useRouter();
   return useMutation({
      mutationKey: ['auth'],
      mutationFn: (data: TVerifyOTPRequest) => verifyOTP(data),
      onSuccess: async (res) => {
         if (!res.ok) {
            // TODO: add error showing mechanism here
            alert(res.message);
            return;
         }
         await createSession(
            res.data.payload.accessToken,
            res.data.payload.refreshToken
         );

         r.push('/home');
         qc.invalidateQueries();
      },
   });
};

export const useLogoutMutation = () => {
   const qc = useQueryClient();
   const r = useRouter();

   return useMutation({
      mutationKey: ['auth'],
      mutationFn: () => logout(),
      onSuccess: () => {
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
      mutationFn: (data: TLoginRequest) => login(data),
      onSuccess: () => {
         r.replace('/home');
         qc.resetQueries({ queryKey: ['auth'] });
      },
   });
};
