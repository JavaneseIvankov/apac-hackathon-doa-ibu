import Link from 'next/link';
import type { Metadata } from 'next';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { RegisterForm } from '@/features/auth/components/RegisterForm';

export const metadata: Metadata = {
   title: 'Register | Gemini Travel',
   description: 'Create a new Gemini Travel account',
};

export default function RegisterPage() {
   return (
      <Card className="w-full max-w-md">
         <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
               Create an account
            </CardTitle>
            <CardDescription>
               Enter your information to create a Gemini Travel account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <RegisterForm />
         </CardContent>
         <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-muted-foreground text-center">
               Already have an account?{' '}
               <Link href="/login" className="text-primary hover:underline">
                  Log in
               </Link>
            </div>
         </CardFooter>
      </Card>
   );
}
