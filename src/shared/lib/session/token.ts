import { decodeJwt } from 'jose';
import { TSessionData } from './session';

interface TokenPayload extends TSessionData {
   iss: string;
   exp: number;
}

export const decodeToken = (token: string): TokenPayload => {
   return decodeJwt(token);
};
