import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock session-manager actions
import { getSession } from '@/features/session-manager/action';
vi.mock('@/features/session-manager/action', () => ({
   getSession: vi.fn(),
   createSession: vi.fn(),
}));

// Mock fetcher module, but use the real fetchApi implementation
let refreshAccessTokenMock = vi.fn();
vi.mock('@/shared/lib/api/fetcher', async (importOriginal) => {
   const actual = await importOriginal();
   return Object.assign({}, actual, {
      refreshAccessToken: (...args: unknown[]) =>
         refreshAccessTokenMock(...args),
   });
});

import { fetchApi } from '@/shared/lib/api/fetcher';

const mockFetch = vi.fn();
global.fetch = mockFetch;

const mockSession = {
   accessToken: 'mock-access-token',
   refreshToken: 'refresh-token',
};

beforeEach(() => {
   vi.clearAllMocks();
   mockFetch.mockReset();
   refreshAccessTokenMock = vi.fn();
});

describe('fetchApi', () => {
   it('should return success response when fetch is successful', async () => {
      (
         getSession as unknown as { mockResolvedValue: (v: unknown) => void }
      ).mockResolvedValue(mockSession);
      mockFetch.mockResolvedValueOnce({
         ok: true,
         status: 200,
         headers: {
            get: () => 'application/json',
         },
         json: async () => ({ data: 'test' }),
      });

      const result = await fetchApi<{ data: string }>('/mock-endpoint');
      expect(result.ok).toBe(true);
      if (result.ok) {
         expect(result.data).toEqual({ data: 'test' });
      }
   });

   it('should refresh token on 401 and retry request', async () => {
      (
         getSession as unknown as {
            mockResolvedValueOnce: (v: unknown) => void;
         }
      ).mockResolvedValueOnce(mockSession);
      mockFetch
         .mockResolvedValueOnce({
            ok: false,
            status: 401,
            headers: { get: () => 'application/json' },
            json: async () => ({ message: 'Unauthorized' }),
         })
         .mockResolvedValueOnce({
            ok: true,
            status: 200,
            headers: { get: () => 'application/json' },
            json: async () => ({
               status_code: 200,
               message: 'Access token refreshed',
               payload: {
                  accessToken: 'new-access-token',
                  refreshToken: 'new-refresh-token',
               },
            }),
         })
         .mockResolvedValueOnce({
            ok: true,
            status: 200,
            headers: { get: () => 'application/json' },
            json: async () => ({ data: 'after-refresh' }),
         });

      refreshAccessTokenMock.mockResolvedValue(true);

      const result = await fetchApi<{ data: string }>('/mock-endpoint');
      expect(result.ok).toBe(true);
      if (result.ok) {
         expect(result.data).toEqual({ data: 'after-refresh' });
      }
      // expect(refreshAccessTokenMock).toHaveBeenCalled();
   });

   it('should return error response on 401 if refresh fails', async () => {
      (
         getSession as unknown as {
            mockResolvedValueOnce: (v: unknown) => void;
         }
      ).mockResolvedValueOnce(mockSession);
      mockFetch
         .mockResolvedValueOnce({
            ok: false,
            status: 401,
            headers: { get: () => 'application/json' },
            json: async () => ({ error: 'Unauthorized', message: '401 error' }),
         })
         .mockResolvedValueOnce({
            ok: false,
            status: 403,
            headers: { get: () => 'application/json' },
            json: async () => ({
               status_code: 403,
               message: 'Expired refresh token',
            }),
         })
         .mockResolvedValue({
            ok: false,
            status: 403,
            headers: { get: () => 'application/json' },
            json: async () => ({ error: 'Forbidden' }),
         });

      refreshAccessTokenMock.mockResolvedValue(false);

      const result = await fetchApi('/mock-endpoint');
      expect(result.ok).toBe(false);
      if (!result.ok) {
         expect(result.error).toBe('Unauthorized');
      }
      // expect(refreshAccessTokenMock).toHaveBeenCalled();
   });

   it('should handle network error', async () => {
      (
         getSession as unknown as {
            mockResolvedValueOnce: (v: unknown) => void;
         }
      ).mockResolvedValueOnce(mockSession);
      mockFetch.mockRejectedValueOnce(new Error('Network down'));

      const result = await fetchApi('/mock-endpoint');
      expect(result.ok).toBe(false);
      if (!result.ok) {
         expect(result.error).toBe('Network down');
      }
   });

   it('should handle non-JSON response', async () => {
      (
         getSession as unknown as {
            mockResolvedValueOnce: (v: unknown) => void;
         }
      ).mockResolvedValueOnce(mockSession);
      mockFetch.mockResolvedValueOnce({
         ok: false,
         status: 500,
         headers: {
            get: () => 'text/html',
         },
         json: async () => {
            throw new Error('not JSON');
         },
      });

      const result = await fetchApi('/mock-endpoint');
      expect(result.ok).toBe(false);
      expect(result.message).toBe('Something went wrong');
   });
});
