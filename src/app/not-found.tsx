'use client';
import { Button } from '@/shared/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
   const router = useRouter();

   return (
      <div className="min-h-screen flex items-center justify-center bg-background">
         <div className="text-center p-6 rounded-lg bg-background">
            <h1 className="text-4xl font-semibold text-foreground">
               Oops! Page Not Found
            </h1>
            <p className="text-foreground-muted mt-4">
               The page you&apos;re looking for might have been moved or no
               longer exists.
            </p>
            <Button
               onClick={() => router.push('/')}
               className="mt-6 bg-primary text-white hover:bg-primary-dark transition-all duration-300"
            >
               Go to Landing Page
            </Button>
         </div>
      </div>
   );
}
