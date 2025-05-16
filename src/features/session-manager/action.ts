'use server';

import {
   type TSessionData,
   defaultSession,
   sessionOpt,
} from '@/shared/lib/session/session';
import { decodeToken } from '@/shared/lib/session/token';
import { type IronSession, getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

async function _getSession() {
   const session = await getIronSession<TSessionData>(
      await cookies(),
      sessionOpt
   );

   if (!session.isLoggedIn) {
      session.isLoggedIn = defaultSession.isLoggedIn;
   }

   return session;
}

export async function refreshSession(
   accessToken: string,
   refreshToken: string
) {
   const session = await _getSession();
   session.destroy();
   createSession(accessToken, refreshToken);
}

export async function createSession(accessToken: string, refreshToken: string) {
   const session = await _getSession();
   const decoded = decodeToken(accessToken);

   session.name = decoded.name;
   session.email = decoded.email;
   session.id = decoded.id;
   session.isLoggedIn = true;
   session.accessToken = accessToken;
   session.refreshToken = refreshToken;

   await session.save();
}

export async function destroySession() {
   const session = await _getSession();
   session.destroy();
}

export async function getSession(): Promise<IronSession<TSessionData>> {
   const session = await _getSession();
   return JSON.parse(JSON.stringify(session));
}
