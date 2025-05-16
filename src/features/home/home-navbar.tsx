'use client';

import Brand from '@/shared/components/brand';
import { Button } from '@/shared/components/ui/button';
import { useSidebar } from '@/shared/components/ui/sidebar';
import { MenuIcon } from 'lucide-react';

export function HomeNavbar() {
   const { toggleSidebar } = useSidebar();

   return (
      <div className="flex flex-row justify-between items-center p-4 rounded-xl border md:hidden">
         <div className="flex flex-row gap-2">
            <Brand />
         </div>

         <Button variant="outline" size="icon" onClick={toggleSidebar}>
            <MenuIcon className="text-foreground" />
         </Button>
      </div>
   );
}
