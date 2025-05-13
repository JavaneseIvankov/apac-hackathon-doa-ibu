import { Button } from '@/shared/components/ui/button';
import { sampleTrip } from '@/shared/data/sample-trip';
import { TripList } from '@/features/trips/trip-list';

export default function TripsPage() {
   const trips = [
      sampleTrip,
      {
         ...sampleTrip,
         id: 'trip-789012',
         title: 'Paris Getaway',
         destination: 'France',
      },
   ];

   return (
      <div className="container max-w-6xl">
         <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8">
            <div>
               <h1 className="text-3xl font-bold tracking-tight">Your Trips</h1>
               <p className="text-muted-foreground">
                  View and manage your travel plans
               </p>
            </div>
            <Button>Create New Trip</Button>
         </div>

         <TripList trips={trips} />
      </div>
   );
}
