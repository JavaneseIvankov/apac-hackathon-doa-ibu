import { type NextRequest, NextResponse } from 'next/server';
import { getSession } from './features/session-manager/action';
import logger from './shared/lib/logger/logger';

const PROTECTED_ROUTES = ['/home'];
const GUEST_ONLY_ROUTES = ['/login', '/register'];
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
         {
            pathname,
         }
      );
      return NextResponse.redirect(new URL('/', req.nextUrl));
   }

   // Redirect to login page if user is not logged in
   if (!session?.isLoggedIn) {
      logger.warn('[middleware] User not logged in, redirecting to /login', {
         pathname,
      });
      return NextResponse.redirect(new URL('/login', req.nextUrl));
   }

   // Redirect to home page if user is logged in and trying to access GUEST_ONLY_ROUTES
   if (session?.isLoggedIn) {
      const isGuestOnly = GUEST_ONLY_ROUTES.some((route) =>
         pathname.startsWith(route)
      );
      if (isGuestOnly) {
         logger.info(
            '[middleware] Logged-in user attempting to access guest-only route, redirecting to /home',
            {
               pathname,
            }
         );
         return NextResponse.redirect(new URL('/home', req.nextUrl));
      }
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
