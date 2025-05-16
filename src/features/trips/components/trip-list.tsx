import { TripSummary } from '@/shared/types/trip';
import TripCard from '@/features/trips/components/trip-card';

type TripListProps = {
   trips: TripSummary[];
};

export function TripList({ trips }: TripListProps) {
   return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
         {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
         ))}
      </div>
   );
}
