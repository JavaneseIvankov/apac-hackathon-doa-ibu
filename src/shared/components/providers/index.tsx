import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import ReactQueryProvider from './react-query-provider';

export default function Providers({ children }: { children: ReactNode }) {
   return (
      <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
      >
         <ReactQueryProvider>{children}</ReactQueryProvider>
      </ThemeProvider>
   );
}
