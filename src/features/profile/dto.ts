import { BaseApiResponse } from '@/shared/lib/api/api';
import { User } from '@/shared/types/user';

/**
 * Response DTO for getting the user profile.
 */
export interface TGetProfileResponse extends BaseApiResponse {
   payload: {
      user: {
         name: User['name'];
         email: User['email'];
         photo_url: User['photo_url'];
         preferences: string[];
      };
   };
}

export interface TParsedGetProfileResponse extends BaseApiResponse {
   payload: {
      user: {
         name: User['name'];
         email: User['email'];
         photo_url: User['photo_url'];
         preferences: {
            travelStyle: string;
            interests: string[];
            accommodations: string[];
            tripDuration: string;
            tripBudget: string;
         };
      };
   };
}

/**
 * Request DTO for editing the user profile.
 * All fields are optional; photo is a File (for FormData).
 */
export interface TEditProfileRequest {
   name?: string;
   current_password?: string;
   new_password?: string;
   photo?: File;
}

/**
 * Response DTO for editing the user profile.
 * Usually returns the updated user or just a status.
 */
// FIXME: THIS IS NOT FIXED YET
export interface TEditProfileResponse extends BaseApiResponse {
   payload?: {
      user?: {
         name: User['name'];
         email: User['email'];
         photo_url: User['photo_url'];
         preferences: User['preferences'];
      };
   };
}

export type TAddPreferencesRequest = {
   travelStyle: string;
   interests: string[];
   accommodations: string[];
   tripDuration: string;
   tripBudget: string;
};

export type TAddPreferencesResponse = BaseApiResponse;
