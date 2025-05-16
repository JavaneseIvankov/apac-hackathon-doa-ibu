export type User = {
   email: string;
   name: string;
   photo_url: string;
   preferences: {
      travelStyle: string;
      interests: string[];
      accommodations: string[];
      tripDuration: string;
      tripBudget: string;
   };
};
