import { createSession, getSession } from '@/features/session-manager/action';
import type { TApiResponse } from './api';

type TRefreshTokenResponse = {
   status_code: number;
   message: string;
   payload: {
      accessToken: string;
      refreshToken: string;
   };
};

export async function refreshAccessToken(): Promise<boolean> {
   const session = await getSession();

   if (!session.accessToken) {
      console.warn('No access token available to refresh.');
      return false;
   }

   const res = await fetch('/api/v1/auth/refresh-token', {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${session.accessToken}`,
      },
      credentials: 'include',
   });

   if (!res.ok) {
      console.warn('Refresh token request failed with', res.status);
      return false;
   }

   const data = (await res.json()) as TRefreshTokenResponse;
   console.log(data);
   const accessToken = data.payload.accessToken;
   const refreshToken = data.payload.refreshToken;
   await createSession(accessToken, refreshToken);
   return true;
}

export async function fetchApi<T>(
   url: string,
   options: RequestInit = {},
   retry: boolean = true
): Promise<TApiResponse<T>> {
   try {
      console.log(`trying with retry: ${retry}`);
      const session = await getSession();
      const isFormData =
         typeof FormData !== 'undefined' && options.body instanceof FormData;

      const headers = {
         ...(options.headers || {}),
         ...(session?.accessToken && {
            Authorization: `Bearer ${session.accessToken}`,
         }),
         ...(!isFormData &&
            options.body &&
            typeof options.body !== 'string' && {
               'Content-Type': 'application/json',
            }),
      };

      const body =
         !isFormData && options.body && typeof options.body !== 'string'
            ? JSON.stringify(options.body)
            : options.body;

      const fetchOptions: RequestInit = { ...options, headers, body };
      const res = await fetch(url, fetchOptions);

      const isJson = res.headers
         .get('content-type')
         ?.includes('application/json');
      const data = isJson ? await res.json() : null;

      if (res.status === 401 && retry) {
         const refreshed = await refreshAccessToken();
         console.log(`refresh value ${refreshed}`);
         if (refreshed) {
            console.log('attempting to hit refresh endpoint');
            return fetchApi<T>(url, options, false);
         }
      }

      console.log(res);
      return res.ok
         ? { ok: true, data: data as T, message: data?.message || 'Success' }
         : {
              ok: false,
              error: data?.error || res.statusText,
              message: data?.message || 'Something went wrong',
           };
      // eslint-disable-next-line
   } catch (error: any) {
      console.log(error);
      return {
         ok: false,
         error: error?.message || 'Network error',
         message: 'Fetch failed',
      };
   }
}
