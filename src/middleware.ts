import { type NextRequest, NextResponse } from 'next/server';
import { getSession } from './features/session-manager/action';
import logger from './shared/lib/logger/logger';

const PROTECTED_ROUTES = ['/home'];
const DEV_ONLY_ROUTES = ['/design-system'];

export async function middleware(req: NextRequest) {
   const { pathname } = req.nextUrl;
   logger.debug('[middleware] Incoming request', { pathname });

   const session = await getSession();
   logger.debug('[middleware] Session data', { session });

   const isDevOnly = DEV_ONLY_ROUTES.some((route) =>
      pathname.startsWith(route)
   );
   if (isDevOnly && process.env.NODE_ENV !== 'development') {
      logger.warn(
         '[middleware] Attempt to access dev-only route in non-dev environment',
         { pathname }
      );
      return NextResponse.redirect(new URL('/', req.nextUrl));
   }

   const isProtected = PROTECTED_ROUTES.some((route) =>
      pathname.startsWith(route)
   );
   if (!session?.isLoggedIn && isProtected) {
      logger.warn(
         '[middleware] Unauthenticated user trying to access protected route. Redirecting to /login',
         {
            pathname,
         }
      );
      return NextResponse.redirect(new URL('/login', req.nextUrl));
   }

   logger.debug(
      '[middleware] Request passed all checks, proceeding to next handler',
      { pathname }
   );
   return NextResponse.next();
}

export const config = {
   matcher: ['/home/:path*', '/login', '/register'],
};
