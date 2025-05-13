import Link from 'next/link';
import Brand from './brand';

export default function Footer() {
   return (
      <footer className="w-full border-t border-border py-6 md:py-8 flex justify-center">
         <div className="container px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <Brand />
            <p className="text-xs text-muted-foreground order-3 md:order-2">
               © {new Date().getFullYear()} Gemini Travel. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 order-2 md:order-3">
               <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:underline"
               >
                  Privacy Policy
               </Link>
               <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:underline"
               >
                  Terms of Service
               </Link>
               <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:underline"
               >
                  Contact Us
               </Link>
            </div>
         </div>
      </footer>
   );
}
