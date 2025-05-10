import { Button } from '@/shared/components/ui/button';
import TripCard from '@/features/trips/TripCard';
import { sampleTrip } from '@/shared/data/sample-trip';

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
      <div className="flex min-h-screen flex-col">
         <div className="container px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
               <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                     Your Trips
                  </h1>
                  <p className="text-muted-foreground">
                     View and manage your travel plans
                  </p>
               </div>
               <Button>Create New Trip</Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {trips.map((trip) => (
                  <TripCard
                     key={trip.id}
                     id={trip.id}
                     title={trip.title}
                     destination={trip.destination}
                     startDate={trip.startDate}
                     endDate={trip.endDate}
                     travelers={trip.travelers}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
