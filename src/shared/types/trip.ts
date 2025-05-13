export interface Activity {
   time: string;
   title: string;
   description: string;
   location?: string;
   address?: string;
   cost?: string;
   image?: string;
   tags?: string[];
}

export interface DayPlan {
   day: number;
   date: string;
   title: string;
   description: string;
   activities: Activity[];
   accommodation?: {
      name: string;
      address: string;
      checkIn?: string;
      checkOut?: string;
      cost?: string;
      image?: string;
      bookingReference?: string;
   };
   meals?: {
      breakfast?: Activity;
      lunch?: Activity;
      dinner?: Activity;
   };
   transportation?: {
      mode: string;
      details: string;
      departureTime?: string;
      arrivalTime?: string;
      cost?: string;
      bookingReference?: string;
   };
   notes?: string;
}

export interface TripPlan {
   id: string;
   title: string;
   destination: string;
   startDate: string;
   endDate: string;
   duration: number;
   travelers: number;
   budget: string;
   summary: string;
   days: DayPlan[];
   totalCost?: string;
   createdAt: string;
   updatedAt: string;
}

export type TripSummary = Pick<
   TripPlan,
   | 'id'
   | 'title'
   | 'destination'
   | 'startDate'
   | 'endDate'
   | 'summary'
   | 'travelers'
>;
