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
import { User } from '@/shared/types/user';

// Profile form schema
const profileSchema = z.object({
   name: z.string().min(1, 'Name is required'),
   email: z.string().email('Please enter a valid email address'),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function AccountTab({ user }: { user: User }) {
   const [isUpdating, setIsUpdating] = useState(false);
   const [updateSuccess, setUpdateSuccess] = useState(false);
   const [updateError, setUpdateError] = useState<string | null>(null);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ProfileFormValues>({
      resolver: zodResolver(profileSchema),
      defaultValues: {
         name: user?.name || '',
         email: user?.email || '',
      },
   });

   const onSubmit = (data: ProfileFormValues) => {
      setIsUpdating(true);
      setUpdateSuccess(false);
      setUpdateError(null);

      // Simulate API call
      setTimeout(() => {
         setIsUpdating(false);
         setUpdateSuccess(true);
         console.log('Profile data:', data);
      }, 1000);
   };

   return (
      <Card>
         <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Update your personal information.</CardDescription>
         </CardHeader>
         <CardContent>
            {updateSuccess && (
               <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
                  <Check className="h-4 w-4 mr-2" />
                  <AlertDescription>
                     Your profile has been updated successfully.
                  </AlertDescription>
               </Alert>
            )}
            {updateError && (
               <Alert className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
                  <X className="h-4 w-4 mr-2" />
                  <AlertDescription>{updateError}</AlertDescription>
               </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register('name')} />
                  {errors.name && (
                     <p className="text-sm text-destructive">
                        {errors.name.message}
                     </p>
                  )}
               </div>
               <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register('email')} />
                  {errors.email && (
                     <p className="text-sm text-destructive">
                        {errors.email.message}
                     </p>
                  )}
               </div>
               {/* <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" {...register('phone')} />
               </div> */}
               {/* <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" {...register('location')} />
               </div> */}
               {/* <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" {...register('bio')} />
               </div> */}
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
