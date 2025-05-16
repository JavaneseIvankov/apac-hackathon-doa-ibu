import { createSession, getSession } from '@/features/session-manager/action';
import type { TApiResponse } from './api';
import logger from '../logger/logger';
import { env } from '../env/env';

type TRefreshTokenResponse = {
   status_code: number;
   message: string;
   payload: {
      access_token: string;
      refresh_token: string;
   };
};

export async function refreshAccessToken(): Promise<boolean> {
   const session = await getSession();

   if (!session.accessToken) {
      logger.warn('[refreshAccessToken] No access token available to refresh.');
      return false;
   }

   try {
      const res = await fetch(`${env.API_URL}/auth/refresh-token`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${session.accessToken}`,
         },
         body: JSON.stringify({
            refresh_token: session.refreshToken,
         }),
      });

      const isJson = res.headers
         .get('content-type')
         ?.includes('application/json');
      const data = isJson ? await res.json() : null;

      logger.debug('[refreshAccessToken] Response', {
         status: res.status,
         body: data,
      });

      if (!res.ok) {
         logger.warn(
            '[refreshAccessToken] Refresh token request failed ' +
               res.statusText
         );
         return false;
      }

      const { access_token: accessToken, refresh_token: refreshToken } = (
         data as TRefreshTokenResponse
      ).payload;
      await createSession(accessToken, refreshToken);
      return true;
   } catch (err) {
      logger.error('[refreshAccessToken] Error:', { error: err });
      return false;
   }
}

export async function fetchApi<T>(
   url: string,
   options: RequestInit = {},
   retry: boolean = true
): Promise<TApiResponse<T>> {
   try {
      const session = await getSession();
      const isFormData =
         typeof FormData !== 'undefined' && options.body instanceof FormData;

      const headers: Record<string, string> = {
         ...(options.headers as Record<string, string>),
         ...(session?.accessToken && {
            Authorization: `Bearer ${session.accessToken}`,
         }),
      };

      // Automatically set Content-Type for string bodies (unless user already set it)
      if (
         options.body &&
         typeof options.body === 'string' &&
         !isFormData &&
         !headers['Content-Type']
      ) {
         headers['Content-Type'] = 'application/json';
      }

      const fetchOptions: RequestInit = {
         ...options,
         headers,
      };

      logger.debug('[fetchApi] Request', {
         url,
         method: fetchOptions.method || 'GET',
         headers,
         body: options.body,
      });

      const res = await fetch(url, fetchOptions);

      const isJson = res.headers
         .get('content-type')
         ?.includes('application/json');
      const data = isJson ? await res.json() : null;

      logger.debug('[fetchApi] Response', {
         status: res.status,
         body: data,
      });

      if (res.status === 401 && retry) {
         logger.warn('[fetchApi] Received 401, attempting token refresh...');
         const refreshed = await refreshAccessToken();
         if (refreshed) {
            return fetchApi<T>(url, options, false);
         }
      }

      return res.ok
         ? { ok: true, data: data as T, message: data?.message || 'Success' }
         : {
              ok: false,
              error: data?.error || res.statusText,
              message: data?.message || 'Something went wrong',
           };
      // eslint-disable-next-line
   } catch (error: any) {
      logger.error('[fetchApi] Error', {
         message: error?.message || 'Unknown error',
         stack: error?.stack,
      });

      return {
         ok: false,
         error: error?.message || 'Network error',
         message: error?.message || 'Fetch failed',
      };
   }
}
