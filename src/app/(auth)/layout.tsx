import Footer from '@/shared/components/footer';
import Header from '@/shared/components/header';
import type React from 'react';

export default function AuthLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="flex min-h-screen flex-col">
         <Header />
         <main className="flex-1 flex items-center justify-center py-12">
            {children}
         </main>
         <Footer />
      </div>
   );
}
