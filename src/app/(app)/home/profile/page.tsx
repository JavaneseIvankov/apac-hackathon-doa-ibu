'use client';

import { Loader2 } from 'lucide-react';
import { ProfileSidebar } from '@/features/profile/components/profile-sidebar';
import { ProfileTabs } from '@/features/profile/components/profile-tabs';
import { useGetProfileQuery } from '@/features/profile/query';
import { User } from '@/shared/types/user';

export default function ProfilePage() {
   const { data, isLoading } = useGetProfileQuery();

   if (isLoading) {
      return (
         <div className="flex h-[calc(100vh-64px)] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
         </div>
      );
   }

   if (!data?.ok) {
      return (
         <div className="container min-h-[826px]">
            <div className="flex flex-col gap-6">
               <h1 className="text-3xl font-bold">My Profile</h1>
               <div className="flex justify-center items-center">
                  <h3>Something went wrong :(</h3>
               </div>
            </div>
         </div>
      );
   }

   const user: User = data.data.payload.user;

   return (
      <div className="container min-h-[826px]">
         <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <div className="grid gap-6 md:grid-cols-[250px_1fr]">
               <ProfileSidebar user={user} />
               <ProfileTabs user={user} />
            </div>
         </div>
      </div>
   );
}
