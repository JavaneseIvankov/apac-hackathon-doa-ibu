import { ThemeProvider } from '@/shared/components/providers/theme-provider';
import { ReactNode } from 'react';
import '@/shared/styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <>
         <html lang="en" suppressHydrationWarning>
            <head />
            <body>
               <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
               >
                  {children}
               </ThemeProvider>
            </body>
         </html>
      </>
   );
}
