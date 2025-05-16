import { HomeNavbar } from '@/features/home/home-navbar';
import { HomeSidebar } from '@/features/home/home-sidebar';
import { SidebarProvider } from '@/shared/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <SidebarProvider className="w-screen">
         <div className="flex bg-background w-full flex-col md:flex-row">
            <HomeSidebar />
            <HomeNavbar />
            <main className="flex-1 flex justify-center py-18 px-12">
               {children}
            </main>
         </div>
      </SidebarProvider>
   );
}
