'use client';

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Badge } from '@/shared/components/ui/badge';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

interface TripCardProps {
   title: string;
   date: string;
   description: string;
   destination: string;
   travelers?: number;
   status?: 'upcoming' | 'past' | 'saved' | 'draft';
   image?: string;
   onViewDetails?: () => void;
   onEdit?: () => void;
   onBook?: () => void;
}

export function TripCard({
   title,
   date,
   description,
   destination,
   travelers = 1,
   status = 'upcoming',
   image = '/placeholder.svg?height=200&width=400',
   onViewDetails,
   onEdit,
   onBook,
}: TripCardProps) {
   return (
      <Card className="overflow-hidden">
         <div className="relative h-40">
            <Image
               src={image || '/placeholder.svg'}
               alt={title}
               className="w-full h-full object-cover"
            />
            {status && (
               <div className="absolute top-2 right-2">
                  <Badge
                     variant={
                        status === 'upcoming'
                           ? 'default'
                           : status === 'past'
                           ? 'secondary'
                           : status === 'saved'
                           ? 'outline'
                           : 'destructive'
                     }
                  >
                     {status === 'upcoming'
                        ? 'Upcoming'
                        : status === 'past'
                        ? 'Completed'
                        : status === 'saved'
                        ? 'Saved'
                        : 'Draft'}
                  </Badge>
               </div>
            )}
         </div>
         <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
               <div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{date}</CardDescription>
               </div>
            </div>
         </CardHeader>
         <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
               <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{destination}</span>
               </div>
               <div className="flex items-center gap-1 text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>{date}</span>
               </div>
               <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>
                     {travelers} traveler{travelers > 1 ? 's' : ''}
                  </span>
               </div>
            </div>
         </CardContent>
         <CardFooter className="flex gap-2 pt-2 border-t">
            {onViewDetails && (
               <Button
                  variant="outline"
                  size="sm"
                  onClick={onViewDetails}
                  className="flex-1"
               >
                  View details
               </Button>
            )}
            {onEdit && (
               <Button
                  variant="outline"
                  size="sm"
                  onClick={onEdit}
                  className="flex-1"
               >
                  Edit
               </Button>
            )}
            {onBook && (
               <Button size="sm" onClick={onBook} className="flex-1">
                  Book now
               </Button>
            )}
         </CardFooter>
      </Card>
   );
}
