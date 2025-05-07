import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="border-t border-accent py-6 md:py-8">
         <div className="container px-4 sm:px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
               <div className="relative h-6 w-6 overflow-hidden rounded-full bg-primary">
                  <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold text-xs">
                     G
                  </span>
               </div>
               <span className="text-sm font-semibold text-primary">
                  Gemini Travel
               </span>
            </div>
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
