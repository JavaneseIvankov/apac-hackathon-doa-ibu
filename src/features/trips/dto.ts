import { BaseApiResponse } from '@/shared/lib/api/api';
import { TripPlan } from '@/shared/types/trip';

export type TCreateTripPlanRequest = {
   use_preference: boolean;
   text: string; // AI Prompt
};

export interface TCreateTripPlanResponse extends BaseApiResponse {
   payload: TripPlan;
}

export interface TGetAllTripPlansResponse extends BaseApiResponse {
   payload: {
      id: string;
      title: string;
      destination: string;
      start_date: string;
      end_date: string;
      travelers: number;
   }[];
}
