'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TRegisterSchema } from '@/features/auth/dto';
import { z } from 'zod';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { useState } from 'react';
import { useRegisterMutation } from '@/features/auth/query';

const RegisterFormSchema = TRegisterSchema.extend({
   confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
   terms: z.literal(true, {
      errorMap: () => ({ message: 'You must accept the terms.' }),
   }),
}).refine((data) => data.password === data.confirmPassword, {
   message: "Passwords don't match",
   path: ['confirmPassword'],
});

type TRegisterForm = z.infer<typeof RegisterFormSchema>;

export function RegisterForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm<TRegisterForm>({
      resolver: zodResolver(RegisterFormSchema),
      defaultValues: {
         name: '',
         email: '',
         password: '',
         confirmPassword: '',
         terms: true,
      },
   });

   const [formError, setFormError] = useState<string | null>(null);
   const { mutate: mutateRegister, isPending } = useRegisterMutation();

   function isErrorWithMessage(error: unknown): error is { message: string } {
      return (
         typeof error === 'object' &&
         error !== null &&
         'message' in error &&
         typeof (error as { message: unknown }).message === 'string'
      );
   }

   function isErrorWithResponseMessage(
      error: unknown
   ): error is { response: { data: { message: string } } } {
      return (
         typeof error === 'object' &&
         error !== null &&
         'response' in error &&
         // eslint-disable-next-line
         typeof (error as any).response?.data?.message === 'string'
      );
   }

   const handleValidSubmit = async (data: TRegisterForm) => {
      setFormError(null);
      try {
         await mutateRegister({
            name: data.name,
            email: data.email,
            password: data.password,
         });
      } catch (e: unknown) {
         let message = 'Registration failed';
         if (isErrorWithResponseMessage(e)) {
            message = e.response.data.message;
         } else if (isErrorWithMessage(e)) {
            message = e.message;
         }
         setFormError(message);
      }
   };

   return (
      <form onSubmit={handleSubmit(handleValidSubmit)} className="space-y-4">
         <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
               id="name"
               placeholder="John Doe"
               {...register('name')}
               aria-invalid={!!errors.name}
            />
            {errors.name && (
               <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
         </div>
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
            <Label htmlFor="password">Password</Label>
            <Input
               id="password"
               type="password"
               autoComplete="new-password"
               {...register('password')}
               aria-invalid={!!errors.password}
            />
            {errors.password && (
               <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
         </div>
         <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
               id="confirmPassword"
               type="password"
               autoComplete="new-password"
               {...register('confirmPassword')}
               aria-invalid={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
               <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
               </p>
            )}
         </div>
         <div className="flex items-center space-x-2">
            <Checkbox id="terms" {...register('terms')} />
            <label
               htmlFor="terms"
               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
               I agree to the{' '}
               <a href="/terms" className="text-primary hover:underline">
                  terms of service
               </a>{' '}
               and{' '}
               <a href="/privacy" className="text-primary hover:underline">
                  privacy policy
               </a>
            </label>
         </div>
         {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms.message}</p>
         )}
         {formError && <div className="text-sm text-red-500">{formError}</div>}
         <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || isPending}
         >
            {isSubmitting || isPending ? 'Registering...' : 'Register'}
         </Button>
      </form>
   );
}
