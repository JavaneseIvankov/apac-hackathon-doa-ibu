export type TApiResponse<T> =
   | { ok: true; data: T; message: string }
   | { ok: false; error: string; message: string };

export interface BaseApiResponse {
   status_code: number;
   message: string;
}
