'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TripInput } from '@/features/home/trip-input';
import { RecentTrips } from '@/features/home/recent-trips';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/shared/lib/temp/hooks';

export default function HomePage() {
   const { user, isLoading, isAuthenticated } = useAuth();
   const router = useRouter();

   // Redirect to login if not authenticated
   useEffect(() => {
      if (!isLoading && !isAuthenticated) {
         // router.push("/login")
      }
   }, [isLoading, isAuthenticated, router]);

   if (isLoading) {
      return (
         <div className="flex h-screen items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
         </div>
      );
   }

   // Safety check - should not render if not authenticated
   if (!isAuthenticated) {
      // return null
   }

   return (
      <div className="container max-w-6xl">
         <section className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
               Hi, {user?.name?.split(' ')[0]}
            </h1>
            <p className="text-muted-foreground">
               Ready for your next adventure? Let Gemini help you plan the
               perfect trip tailored just for you.
            </p>
         </section>

         <section className="mb-12">
            <TripInput className="border-none outline-0 shadow-none" />
         </section>

         <section>
            <RecentTrips />
         </section>
      </div>
   );
}
