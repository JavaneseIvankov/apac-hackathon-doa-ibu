import { ReactNode } from 'react';
import '@/shared/styles/globals.css';
import Providers from '@/shared/components/providers';

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <>
         <html lang="en" suppressHydrationWarning>
            <head />
            <body>
               <Providers>{children}</Providers>
            </body>
         </html>
      </>
   );
}
