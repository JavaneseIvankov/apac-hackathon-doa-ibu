'use server';

import { fetchApi } from '@/shared/lib/api/fetcher';
import {
   TGetProfileResponse,
   TEditProfileRequest,
   TEditProfileResponse,
   TAddPreferencesRequest,
   TAddPreferencesResponse,
   TParsedGetProfileResponse,
} from './dto';
import { env } from '@/shared/lib/env/env';
import { formatAddPreferencesRequest, parsePreferencesResponse } from './util';
import { TApiResponse } from '@/shared/lib/api/api';
import logger from '@/shared/lib/logger/logger';

export const getProfile = async (): Promise<
   TApiResponse<TParsedGetProfileResponse>
> => {
   logger.info('[getProfile] Fetching user profile');
   const res = await fetchApi<TGetProfileResponse>(
      `${env.API_URL}/user/profile`
   );

   if (!res.ok) {
      logger.warn('[getProfile] Failed to fetch user profile', {
         error: res.error,
         message: res.message,
      });
      return res as TApiResponse<TParsedGetProfileResponse>;
   }

   const { user } = res.data.payload;
   logger.debug('[getProfile] Raw user data', { user });

   const parsedUser = {
      ...user,
      preferences: parsePreferencesResponse(user.preferences),
   };

   logger.debug('[getProfile] Parsed user data', { parsedUser });

   const parsedResponse: TApiResponse<TParsedGetProfileResponse> = {
      ...res,
      data: {
         ...res.data,
         payload: {
            ...res.data.payload,
            user: parsedUser,
         },
      },
   };

   logger.info('[getProfile] Successfully fetched and parsed user profile');
   return parsedResponse;
};

/**
 * Edit user profile.
 * Accepts partial fields and file upload (photo).
 */
export const editProfile = async (data: TEditProfileRequest) => {
   logger.info('[editProfile] Editing user profile', { data });

   const formData = new FormData();
   if (data.name) formData.append('name', data.name);
   if (data.current_password)
      formData.append('current_password', data.current_password);
   if (data.new_password) formData.append('new_password', data.new_password);
   if (data.photo) formData.append('photo', data.photo);

   logger.debug('[editProfile] FormData prepared', { formData });

   const res = await fetchApi<TEditProfileResponse>(
      `${env.API_URL}/user/profile`,
      {
         method: 'PATCH',
         body: formData,
      }
   );

   if (!res.ok) {
      logger.warn('[editProfile] Failed to edit user profile', {
         error: res.error,
         message: res.message,
      });
   } else {
      logger.info('[editProfile] Successfully edited user profile');
   }

   return res;
};

export const addPreferences = async (payload: TAddPreferencesRequest) => {
   logger.info('[addPreferences] Adding user preferences', { payload });

   const _payload = formatAddPreferencesRequest(payload);
   logger.debug('[addPreferences] Formatted preferences payload', {
      _payload,
   });

   const res = await fetchApi<TAddPreferencesResponse>(
      `${env.API_URL}/user/preferences`,
      {
         method: 'POST',
         body: JSON.stringify(_payload),
      }
   );

   if (!res.ok) {
      logger.warn('[addPreferences] Failed to add preferences', {
         error: res.error,
         message: res.message,
      });
   } else {
      logger.info('[addPreferences] Successfully added preferences');
   }

   return res;
};
