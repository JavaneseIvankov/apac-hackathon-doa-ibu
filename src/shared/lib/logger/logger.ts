/* eslint-disable @typescript-eslint/no-explicit-any */

const isDev = process.env.NODE_ENV === 'development';
const isServer = typeof window === 'undefined';

function formatMessage(level: string, args: any[]) {
   const prefix = isServer
      ? `[${level.toUpperCase()}][server]`
      : `[${level.toUpperCase()}][client]`;
   return [prefix, ...args];
}

const logger = {
   info: (...args: any[]) => {
      if (isDev) console.info(...formatMessage('info', args));
   },
   debug: (...args: any[]) => {
      if (isDev) console.debug(...formatMessage('debug', args));
   },
   warn: (...args: any[]) => {
      if (isDev) console.warn(...formatMessage('warn', args));
   },
   error: (...args: any[]) => {
      // Always log errors, even in production
      console.error(...formatMessage('error', args));
   },
};

export default logger;
