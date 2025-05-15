'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useAuth } from "@/providers/auth-provider"
import { Button } from '@/shared/components/ui/button';
import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '@/shared/components/ui/avatar';
import {
   Sidebar,
   SidebarHeader,
   SidebarContent,
   SidebarFooter,
   SidebarMenu,
   SidebarMenuItem,
   SidebarMenuButton,
   SidebarTrigger,
   useSidebar,
} from '@/shared/components/ui/sidebar';
import { Home, Map, User, LogOut, Compass, Heart, Search } from 'lucide-react';
import { useSessionQuery } from '../session-manager/query';
import { useLogoutMutation } from '../auth/query';

export function HomeSidebar() {
   const { data: session } = useSessionQuery();
   const { mutate: logout } = useLogoutMutation();
   // const { user, logout } = useAuth();
   const pathname = usePathname();
   const { isMobile } = useSidebar();

   // HACK: use dedicated component to fetch user image
   const user = {
      name: session?.name,
      image: 'https://placehold.co/400',
      email: session?.email,
   };

   // Get user initials for avatar
   const getInitials = (name: string) => {
      return name
         .split(' ')
         .map((n) => n[0])
         .join('')
         .toUpperCase();
   };

   return (
      <Sidebar className="border-r">
         <SidebarHeader className="py-4">
            <div className="flex items-center gap-2 px-4">
               <Link href="/home" className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
                     <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
                        G
                     </span>
                  </div>
                  <span className="text-xl font-bold text-primary">Gemini</span>
               </Link>
            </div>
         </SidebarHeader>

         <SidebarContent>
            <div className="px-4 py-2">
               <div className="flex items-center gap-3 rounded-lg border p-3">
                  <Avatar className="h-10 w-10">
                     {user?.image ? (
                        <AvatarImage
                           src={user.image || '/placeholder.svg'}
                           alt={user.name || 'User'}
                        />
                     ) : (
                        <AvatarFallback>
                           {getInitials(user?.name || 'User')}
                        </AvatarFallback>
                     )}
                  </Avatar>
                  <div className="flex flex-col">
                     <span className="font-medium">{user?.name}</span>
                     <span className="text-xs text-muted-foreground">
                        {user?.email}
                     </span>
                  </div>
               </div>
            </div>

            <SidebarMenu className="px-2 py-4">
               <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === '/home'}>
                     <Link href="/home">
                        <Home className="h-4 w-4 mr-2" />
                        <span>Home</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === '/trips'}>
                     <Link href="/trips">
                        <Map className="h-4 w-4 mr-2" />
                        <span>Your Trips</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === '/explore'}>
                     <Link href="/explore">
                        <Compass className="h-4 w-4 mr-2" />
                        <span>Explore</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === '/saved'}>
                     <Link href="/saved">
                        <Heart className="h-4 w-4 mr-2" />
                        <span>Saved</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === '/search'}>
                     <Link href="/search">
                        <Search className="h-4 w-4 mr-2" />
                        <span>Search</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>

            <div className="px-4 py-2">
               <h3 className="mb-2 px-2 text-xs font-medium text-muted-foreground">
                  Account
               </h3>
               <SidebarMenu>
                  <SidebarMenuItem>
                     <SidebarMenuButton
                        asChild
                        isActive={pathname === '/profile'}
                     >
                        <Link href="/profile">
                           <User className="h-4 w-4 mr-2" />
                           <span>Profile & Settings</span>
                        </Link>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
               </SidebarMenu>
            </div>
         </SidebarContent>

         <SidebarFooter className="border-t p-4">
            <Button
               variant="outline"
               className="w-full justify-start"
               onClick={() => logout()}
            >
               <LogOut className="h-4 w-4 mr-2" />
               <span>Log out</span>
            </Button>
         </SidebarFooter>
         {!isMobile && (
            <SidebarTrigger className="absolute right-[-20px] top-0 translate-x-1/2 bg-background border-accent border-r-1 border-b-1 border-t-1 rounded-tl-none rounded-bl-none rounded-tr-none" />
         )}
      </Sidebar>
   );
}
