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
import { Checkbox } from '@/shared/components/ui/checkbox';

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
            <div className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <Label htmlFor="first-name">First name</Label>
                     <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="last-name">Last name</Label>
                     <Input id="last-name" placeholder="Doe" required />
                  </div>
               </div>
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
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input id="confirm-password" type="password" required />
               </div>
               <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                     htmlFor="terms"
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                     I agree to the{' '}
                     <Link
                        href="/terms"
                        className="text-primary hover:underline"
                     >
                        terms of service
                     </Link>{' '}
                     and{' '}
                     <Link
                        href="/privacy"
                        className="text-primary hover:underline"
                     >
                        privacy policy
                     </Link>
                  </label>
               </div>
               <Button type="submit" className="w-full">
                  Register
               </Button>
            </div>
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
