'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { CalendarDays, MapPin, Users, ArrowRight } from 'lucide-react';
import { TripList } from '@/features/trips/components/trip-list';
import Image from 'next/image';
import { mockTrips } from '@/shared/data/sample-trip';

export function RecentTrips() {
   const [trips] = useState(mockTrips);

   return (
      <div>
         <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Trips</h2>
            <Button variant="outline" size="sm" asChild>
               <Link href="/home/trips" className="flex items-center gap-1">
                  View all <ArrowRight className="h-4 w-4" />
               </Link>
            </Button>
         </div>

         {trips.length === 0 ? (
            <Card className="p-8 text-center">
               <div className="flex flex-col items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                     <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-xl font-semibold">No trips yet</h3>
                     <p className="text-muted-foreground">
                        Start planning your first adventure with Gemini Travel.
                     </p>
                  </div>
                  <Button className="mt-2">Plan your first trip</Button>
               </div>
            </Card>
         ) : (
            <TripList trips={trips} />
         )}
      </div>
   );
}

interface TripCardProps {
   trip: {
      id: string;
      title: string;
      description: string;
      destination: string;
      date: string;
      image: string;
      status: string;
      travelers: number;
   };
}

export function TripCard({ trip }: TripCardProps) {
   return (
      <Card className="overflow-hidden flex flex-col h-full">
         <div className="relative h-40">
            <Image
               src={trip.image || '/placeholder.svg'}
               alt={trip.title}
               className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
               <Badge
                  variant={
                     trip.status === 'upcoming'
                        ? 'default'
                        : trip.status === 'completed'
                        ? 'secondary'
                        : 'outline'
                  }
               >
                  {trip.status === 'upcoming'
                     ? 'Upcoming'
                     : trip.status === 'completed'
                     ? 'Completed'
                     : 'Planning'}
               </Badge>
            </div>
         </div>
         <CardHeader className="pb-2">
            <CardTitle className="text-lg">{trip.title}</CardTitle>
         </CardHeader>
         <CardContent className="space-y-2 flex-grow">
            <p className="text-sm text-muted-foreground line-clamp-2">
               {trip.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
               <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{trip.destination}</span>
               </div>
               <div className="flex items-center gap-1 text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>{trip.date}</span>
               </div>
               <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>
                     {trip.travelers} traveler{trip.travelers > 1 ? 's' : ''}
                  </span>
               </div>
            </div>
         </CardContent>
         <CardFooter className="pt-2 border-t">
            <Button variant="outline" size="sm" className="w-full" asChild>
               <Link href={`/home/trips/${trip.id}`}>View details</Link>
            </Button>
         </CardFooter>
      </Card>
   );
}
