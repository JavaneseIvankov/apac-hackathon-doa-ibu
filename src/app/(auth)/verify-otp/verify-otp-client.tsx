'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Alert, AlertDescription } from '@/shared/components/ui/alert';
import { Progress } from '@/shared/components/ui/progress';
import { Loader2, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import {
   InputOTP,
   InputOTPGroup,
   InputOTPSlot,
   InputOTPSeparator,
} from '@/shared/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useOtpMutation } from '@/features/auth/query';

const OTP_LIFETIME_SECS = 300;

export default function VerifyOtpClient() {
   const searchParams = useSearchParams();
   const email = searchParams.get('email') || 'email@mail.com';

   const [otp, setOtp] = useState('');
   const [isResending, setIsResending] = useState(false);
   const [error, setError] = useState(null);
   const [timeLeft, setTimeLeft] = useState(OTP_LIFETIME_SECS);
   const timerRef = useRef<NodeJS.Timeout | null>(null);

   const {
      mutate: verifyOTP,
      isPending: isVerifying,
      isSuccess,
   } = useOtpMutation();

   useEffect(() => {
      timerRef.current = setInterval(() => {
         setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
               clearInterval(timerRef.current as NodeJS.Timeout);
               return 0;
            }
            return prevTime - 1;
         });
      }, 1000);

      return () => {
         if (timerRef.current) clearInterval(timerRef.current);
      };
   }, []);

   const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs
         .toString()
         .padStart(2, '0')}`;
   };

   const handleVerify = () => verifyOTP({ email: email, otp });

   const handleResend = () => {
      setIsResending(true);
      setError(null);

      setTimeout(() => {
         setIsResending(false);
         setTimeLeft(OTP_LIFETIME_SECS);

         if (timerRef.current) clearInterval(timerRef.current);
         timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
               if (prevTime <= 1) {
                  clearInterval(timerRef.current as NodeJS.Timeout);
                  return 0;
               }
               return prevTime - 1;
            });
         }, 1000);
      }, 1500);
   };

   if (!email) {
      return (
         <Card className="w-full max-w-md">
            <CardHeader>
               <CardTitle>Email not provided</CardTitle>
               <CardDescription>
                  Please start the verification process from the beginning.
               </CardDescription>
            </CardHeader>
            <CardFooter>
               <Link
                  href="/register"
                  className="text-primary underline text-sm"
               >
                  Go to registration
               </Link>
            </CardFooter>
         </Card>
      );
   }

   return (
      <Card className="w-full max-w-md">
         <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
               Verify your account
            </CardTitle>
            <CardDescription>
               We&apos;ve sent a 6-character verification code to{' '}
               <span className="font-medium">{email}</span>
            </CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            {isSuccess ? (
               <Alert className="bg-green-50 text-green-800 border-green-200">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  <AlertDescription>
                     Verification successful! Redirecting you...
                  </AlertDescription>
               </Alert>
            ) : error ? (
               <Alert className="bg-destructive/10 text-destructive border-destructive/20">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>{error}</AlertDescription>
               </Alert>
            ) : null}

            <div className="space-y-4">
               <div className="space-y-2">
                  <div className="flex justify-between items-center">
                     <label className="text-sm font-medium">
                        Verification code
                     </label>
                     <span className="text-sm text-muted-foreground">
                        {timeLeft > 0
                           ? `Expires in ${formatTime(timeLeft)}`
                           : 'Code expired'}
                     </span>
                  </div>

                  <div className="flex justify-center py-2">
                     <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={setOtp}
                        pattern={REGEXP_ONLY_DIGITS}
                        disabled={isVerifying || isSuccess || timeLeft === 0}
                     >
                        <InputOTPGroup>
                           <InputOTPSlot index={0} />
                           <InputOTPSlot index={1} />
                           <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                           <InputOTPSlot index={3} />
                           <InputOTPSlot index={4} />
                           <InputOTPSlot index={5} />
                        </InputOTPGroup>
                     </InputOTP>
                  </div>

                  {timeLeft > 0 && (
                     <Progress
                        value={(timeLeft / OTP_LIFETIME_SECS) * 100}
                        className="h-1 mt-2"
                     />
                  )}
               </div>

               <Button
                  onClick={handleVerify}
                  className="w-full"
                  disabled={
                     otp.length !== 6 ||
                     isVerifying ||
                     timeLeft === 0 ||
                     isSuccess
                  }
               >
                  {isVerifying ? (
                     <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                        Verifying...
                     </>
                  ) : (
                     'Verify'
                  )}
               </Button>
            </div>

            <div className="text-center text-sm">
               <p className="text-muted-foreground">
                  Didn&apos;t receive a code?{' '}
                  <button
                     onClick={handleResend}
                     disabled={isResending || timeLeft > 270 || isSuccess}
                     className="text-primary hover:underline disabled:opacity-50 disabled:no-underline"
                  >
                     {isResending ? 'Resending...' : 'Resend code'}
                  </button>
               </p>
            </div>
         </CardContent>
         <CardFooter className="flex justify-between border-t pt-6">
            <Link
               href="/register"
               className="text-sm text-muted-foreground hover:underline flex items-center"
            >
               <ArrowLeft className="h-3 w-3 mr-1" />
               Back to Register
            </Link>
            <Link href="#" className="text-sm text-primary hover:underline">
               Try another method
            </Link>
         </CardFooter>
      </Card>
   );
}
