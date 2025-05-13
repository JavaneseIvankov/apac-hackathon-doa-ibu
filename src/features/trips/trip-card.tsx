import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import {
   CalendarIcon,
   MapPinIcon,
   UsersIcon,
   ArrowRightIcon,
} from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { TripSummary } from '@/shared/types/trip';

interface TripCardProps {
   trip: TripSummary;
}

export default function TripCard({ trip }: TripCardProps) {
   return (
      <Card key={trip.id} className="overflow-hidden justify-between">
         <CardHeader className="pb-3">
            <CardTitle className="text-xl">{trip.title}</CardTitle>
            <CardDescription>{trip.destination}</CardDescription>
         </CardHeader>
         <CardContent className="pb-3">
            <div className="space-y-2 text-sm">
               <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <span>
                     {format(parseISO(trip.startDate), 'MMM d')} -{' '}
                     {format(parseISO(trip.endDate), 'MMM d, yyyy')}
                  </span>
               </div>
               <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-primary" />
                  <span>{trip.destination}</span>
               </div>
               <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4 text-primary" />
                  <span>{trip.travelers} travelers</span>
               </div>
            </div>
         </CardContent>
         <CardFooter>
            <Link href={`/trips/${trip.id}`} className="w-full">
               <Button variant="outline" className="w-full justify-between">
                  View Trip
                  <ArrowRightIcon className="h-4 w-4" />
               </Button>
            </Link>
         </CardFooter>
      </Card>
   );
}
