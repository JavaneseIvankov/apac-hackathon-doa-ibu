'use client';

// import { useAuth } from '@/features/auth/hooks/useAuth';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ProfileSidebar } from '@/features/profile/components/profile-sidebar';
import { ProfileTabs } from '@/features/profile/components/profile-tabs';

// HACK: use actual hook
const useAuth = () => {
   return {
      user: {
         name: 'John Lenon',
         email: 'johndoe@gmail.com',
         image: 'https://placehold.co/400',
      },
      isLoading: false,
   };
};

export default function ProfilePage() {
   const { user, isLoading } = useAuth();
   const router = useRouter();

   // If loading or no user (not authenticated), show loading state
   if (isLoading) {
      return (
         <div className="flex h-[calc(100vh-64px)] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
         </div>
      );
   }

   // If not authenticated after loading, redirect to login
   if (!user && !isLoading) {
      router.push('/login');
      return null;
   }

   return (
      <div className="container px-4 min-h-[826px] py-10">
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
