'use client';

import { ThemeProvider } from '@/shared/components/providers/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

export default function Providers({ children }: React.PropsWithChildren) {
   const [queryClient] = React.useState(() => {
      return new QueryClient();
   });

   return (
      <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
      >
         <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
         </QueryClientProvider>
      </ThemeProvider>
   );
}
