export type TApiResponse<T> =
   | { ok: true; data: T; message: string }
   | { ok: false; error: string; message: string };
