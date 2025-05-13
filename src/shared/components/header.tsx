'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import {
   Sheet,
   SheetTitle,
   SheetContent,
   SheetTrigger,
} from '@/shared/components/ui/sheet';
import Brand from './brand';

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header className="sticky top-0 z-50 w-full border-b border-accent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
         <div className="container px-4 flex h-16 items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
               <Brand />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
               <Link href="#" className="text-sm font-medium hover:underline">
                  Destinations
               </Link>
               <Link href="#" className="text-sm font-medium hover:underline">
                  How It Works
               </Link>
               <Link href="#" className="text-sm font-medium hover:underline">
                  About Us
               </Link>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
               <Link href="/login">
                  <Button variant="ghost" className="text-sm font-medium">
                     Log in
                  </Button>
               </Link>
               <Link href="/register">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                     Register
                  </Button>
               </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
               <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" aria-label="Menu">
                     <Menu className="h-5 w-5" />
                  </Button>
               </SheetTrigger>
               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle>Menu</SheetTitle>
                  <nav className="flex flex-col gap-4 mt-8">
                     <Link
                        href="#"
                        className="text-lg font-medium hover:text-primary"
                        onClick={() => setIsOpen(false)}
                     >
                        Destinations
                     </Link>
                     <Link
                        href="#"
                        className="text-lg font-medium hover:text-primary"
                        onClick={() => setIsOpen(false)}
                     >
                        How It Works
                     </Link>
                     <Link
                        href="#"
                        className="text-lg font-medium hover:text-primary"
                        onClick={() => setIsOpen(false)}
                     >
                        About Us
                     </Link>
                     <div className="h-px bg-border my-4" />
                     <Link
                        href="/login"
                        className="text-lg font-medium hover:text-primary"
                        onClick={() => setIsOpen(false)}
                     >
                        Log in
                     </Link>
                     <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                           Register
                        </Button>
                     </Link>
                  </nav>
               </SheetContent>
            </Sheet>
         </div>
      </header>
   );
}
