import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Label } from '@/shared/components/ui/label';

export const metadata: Metadata = {
   title: 'Login | Gemini Travel',
   description: 'Log in to your Gemini Travel account',
};

export default function LoginPage() {
   return (
      <Card className="w-full max-w-md">
         <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Log in</CardTitle>
            <CardDescription>
               Enter your email and password to access your account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <div className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email"
                     type="email"
                     placeholder="hello@example.com"
                     required
                  />
               </div>
               <div className="space-y-2">
                  <div className="flex items-center justify-between">
                     <Label htmlFor="password">Password</Label>
                     <Link
                        href="/forgot-password"
                        className="text-sm text-primary hover:underline"
                     >
                        Forgot password?
                     </Link>
                  </div>
                  <Input id="password" type="password" required />
               </div>
               <Button type="submit" className="w-full">
                  Log in
               </Button>
            </div>
         </CardContent>
         <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-muted-foreground text-center">
               Don&apos;t have an account?{' '}
               <Link href="/register" className="text-primary hover:underline">
                  Register
               </Link>
            </div>
         </CardFooter>
      </Card>
   );
}
