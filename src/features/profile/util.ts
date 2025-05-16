import { TAddPreferencesRequest } from './dto';

export const parsePreferencesResponse = (preferences: string[]) => {
   const travelStyle =
      preferences
         .find((pref: string) => pref.startsWith('Travel Style:'))
         ?.replace('Travel Style: ', '') || '';

   const interests =
      preferences
         .find((pref: string) => pref.startsWith('Interest/Activities:'))
         ?.replace('Interest/Activities: ', '')
         .split(',')
         .map((interest: string) => interest.trim()) || [];

   const accommodations =
      preferences
         .find((pref: string) => pref.startsWith('Accomodation: hotels:'))
         ?.replace('Accomodation: hotels: ', '')
         .split(',')
         .map((accommodation: string) => accommodation.trim()) || [];

   const tripDuration =
      preferences
         .find((pref: string) => pref.startsWith('Typical Trip Duration:'))
         ?.replace('Typical Trip Duration: ', '') || '';

   const tripBudget =
      preferences
         .find((pref: string) => pref.startsWith('Budget per Day:'))
         ?.replace('Budget per Day: ', '') || '';

   return {
      travelStyle,
      interests,
      accommodations,
      tripDuration,
      tripBudget,
   };
};
export const formatAddPreferencesRequest = (
   payload: TAddPreferencesRequest
) => {
   const interestString = payload.interests.join(', ');
   const accomodationString = payload.interests.join(', ');
   return {
      preferences: [
         `Travel Style: ${payload.travelStyle}`,
         `Interest/Activities: ${interestString}`,
         `Accomodation: hotels: ${accomodationString}`,
         `Typical Trip Duration: ${payload.tripDuration}`,
         `Budget per Day: ${payload.tripBudget}`,
      ],
   };
};
