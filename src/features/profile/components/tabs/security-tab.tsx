import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Alert, AlertDescription } from '@/shared/components/ui/alert';
import { Check, X, Loader2 } from 'lucide-react';
import { useState } from 'react';

// Password form schema
const passwordSchema = z
   .object({
      currentPassword: z.string().min(1, 'Current password is required'),
      newPassword: z.string().min(6, 'Password must be at least 6 characters'),
      confirmPassword: z.string().min(6, 'Please confirm your password'),
   })
   .refine((data) => data.newPassword === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
   });

type PasswordFormValues = z.infer<typeof passwordSchema>;

export function SecurityTab() {
   const [isUpdating, setIsUpdating] = useState(false);
   const [passwordSuccess, setPasswordSuccess] = useState(false);
   const [passwordError, setPasswordError] = useState<string | null>(null);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<PasswordFormValues>({
      resolver: zodResolver(passwordSchema),
      defaultValues: {
         currentPassword: '',
         newPassword: '',
         confirmPassword: '',
      },
   });

   const onSubmit = (data: PasswordFormValues) => {
      setIsUpdating(true);
      setPasswordSuccess(false);
      setPasswordError(null);

      // Simulate API call
      setTimeout(() => {
         setIsUpdating(false);
         setPasswordSuccess(true);
         reset();
         console.log('Password data:', data);
      }, 1000);
   };

   return (
      <Card>
         <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Update your password.</CardDescription>
         </CardHeader>
         <CardContent>
            {passwordSuccess && (
               <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
                  <Check className="h-4 w-4 mr-2" />
                  <AlertDescription>
                     Your password has been updated successfully.
                  </AlertDescription>
               </Alert>
            )}
            {passwordError && (
               <Alert className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
                  <X className="h-4 w-4 mr-2" />
                  <AlertDescription>{passwordError}</AlertDescription>
               </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current password</Label>
                  <Input
                     id="currentPassword"
                     type="password"
                     {...register('currentPassword')}
                  />
                  {errors.currentPassword && (
                     <p className="text-sm text-destructive">
                        {errors.currentPassword.message}
                     </p>
                  )}
               </div>
               <div className="space-y-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <Input
                     id="newPassword"
                     type="password"
                     {...register('newPassword')}
                  />
                  {errors.newPassword && (
                     <p className="text-sm text-destructive">
                        {errors.newPassword.message}
                     </p>
                  )}
               </div>
               <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input
                     id="confirmPassword"
                     type="password"
                     {...register('confirmPassword')}
                  />
                  {errors.confirmPassword && (
                     <p className="text-sm text-destructive">
                        {errors.confirmPassword.message}
                     </p>
                  )}
               </div>
               <Button type="submit" disabled={isUpdating}>
                  {isUpdating ? (
                     <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                        changes...
                     </>
                  ) : (
                     'Save changes'
                  )}
               </Button>
            </form>
         </CardContent>
      </Card>
   );
}
