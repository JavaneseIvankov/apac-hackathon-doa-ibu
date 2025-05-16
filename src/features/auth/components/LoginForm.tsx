'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TLoginSchema } from '@/features/auth/dto';
import { z } from 'zod';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { useState } from 'react';
import { useLoginMutation } from '@/features/auth/query';
import { PasswordInput } from '@/shared/components/ui/password-input';

type TLoginForm = z.infer<typeof TLoginSchema>;

export function LoginForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm<TLoginForm>({
      resolver: zodResolver(TLoginSchema),
      defaultValues: {
         email: '',
         password: '',
         rememberMe: false,
      },
   });

   const [formError, setFormError] = useState<string | null>(null);
   const loginMutation = useLoginMutation();

   const onSubmit = async (data: TLoginForm) => {
      setFormError(null);
      try {
         await loginMutation.mutateAsync(data);
         // eslint-disable-next-line
      } catch (e: any) {
         setFormError(
            (e?.response?.data?.message as string) ||
               e?.message ||
               'Login failed'
         );
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
         <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
               id="email"
               type="email"
               placeholder="hello@example.com"
               autoComplete="email"
               {...register('email')}
               aria-invalid={!!errors.email}
            />
            {errors.email && (
               <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
         </div>
         <div className="space-y-2">
            <div className="flex items-center justify-between">
               <Label htmlFor="password">Password</Label>
               {/* The forgot password link is handled in the parent */}
            </div>
            <PasswordInput
               id="password"
               autoComplete="current-password"
               {...register('password')}
               aria-invalid={!!errors.password}
               placeholder="********"
            />
            {errors.password && (
               <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
         </div>
         <div className="flex items-center space-x-2">
            <Checkbox id="rememberMe" {...register('rememberMe')} />
            <Label htmlFor="rememberMe">Remember me</Label>
         </div>
         {formError && <div className="text-sm text-red-500">{formError}</div>}
         <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Log in'}
         </Button>
      </form>
   );
}
