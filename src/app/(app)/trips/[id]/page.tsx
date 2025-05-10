import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import {
   CalendarIcon,
   MapPinIcon,
   UsersIcon,
   BanknoteIcon,
   ClockIcon,
   BedIcon,
   UtensilsIcon,
   CarIcon,
   InfoIcon,
} from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { sampleTrip } from '@/shared/data/sample-trip';
import type { TripPlan } from '@/shared/types/trip';

// interface TripPageProps {
//    params: {
//       id: string;
//    };
// }

export default async function TripPlanPage() {
   // In a real app, we would fetch the trip data based on the ID
   // For now, we'll use our sample data

   const trip: TripPlan = sampleTrip;

   if (!trip) {
      notFound();
   }

   const startDate = parseISO(trip.startDate);
   const endDate = parseISO(trip.endDate);

   return (
      <div className="flex min-h-screen flex-col">
         <div className="container px-4 sm:px-6">
            {/* Trip Header */}
            <div className="mb-8">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                     <h1 className="text-3xl font-bold tracking-tight">
                        {trip.title}
                     </h1>
                     <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                           <MapPinIcon className="h-4 w-4 text-primary" />
                           <span>{trip.destination}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <CalendarIcon className="h-4 w-4 text-primary" />
                           <span>
                              {format(startDate, 'MMM d')} -{' '}
                              {format(endDate, 'MMM d, yyyy')}
                           </span>
                        </div>
                        <div className="flex items-center gap-1">
                           <UsersIcon className="h-4 w-4 text-primary" />
                           <span>{trip.travelers} travelers</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <BanknoteIcon className="h-4 w-4 text-primary" />
                           <span>Budget: {trip.budget}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <Button variant="outline" size="sm">
                        Edit Trip
                     </Button>
                     <Button variant="outline" size="sm">
                        Share
                     </Button>
                     <Button size="sm">Download PDF</Button>
                  </div>
               </div>
               <div className="mt-6">
                  <p className="text-muted-foreground">{trip.summary}</p>
               </div>
            </div>

            {/* Trip Overview Card */}
            <Card className="mb-8">
               <CardHeader>
                  <CardTitle>Trip Overview</CardTitle>
                  <CardDescription>
                     Key details about your {trip.duration}-day journey
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                     <div className="flex flex-col gap-2">
                        <h3 className="font-medium">Dates</h3>
                        <div className="flex items-center gap-2">
                           <CalendarIcon className="h-4 w-4 text-primary" />
                           <span>
                              {format(startDate, 'MMM d')} -{' '}
                              {format(endDate, 'MMM d, yyyy')}
                           </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                           {trip.duration} days
                        </p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h3 className="font-medium">Destinations</h3>
                        <div className="flex items-center gap-2">
                           <MapPinIcon className="h-4 w-4 text-primary" />
                           <span>{trip.destination}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                           Rome & Florence
                        </p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h3 className="font-medium">Travelers</h3>
                        <div className="flex items-center gap-2">
                           <UsersIcon className="h-4 w-4 text-primary" />
                           <span>{trip.travelers} travelers</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Adults</p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h3 className="font-medium">Budget</h3>
                        <div className="flex items-center gap-2">
                           <BanknoteIcon className="h-4 w-4 text-primary" />
                           <span>{trip.budget}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                           Total cost: {trip.totalCost}
                        </p>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* Daily Itineraries */}
            <h2 className="text-2xl font-bold tracking-tight mb-6">
               Daily Itinerary
            </h2>
            <div className="space-y-8">
               {trip.days.map((day) => (
                  <Card
                     key={day.day}
                     id={`day-${day.day}`}
                     className="overflow-hidden"
                  >
                     <CardHeader className="bg-muted/50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                           <div>
                              <CardTitle>
                                 Day {day.day}: {day.title}
                              </CardTitle>
                              <CardDescription>
                                 {format(
                                    parseISO(day.date),
                                    'EEEE, MMMM d, yyyy'
                                 )}
                              </CardDescription>
                           </div>
                           <Button variant="outline" size="sm">
                              View on Map
                           </Button>
                        </div>
                     </CardHeader>
                     <CardContent className="p-6">
                        <p className="mb-6 text-muted-foreground">
                           {day.description}
                        </p>

                        {/* Accommodation */}
                        {day.accommodation && (
                           <div className="mb-6">
                              <div className="flex items-center gap-2 mb-3">
                                 <BedIcon className="h-5 w-5 text-primary" />
                                 <h3 className="font-medium text-lg">
                                    Accommodation
                                 </h3>
                              </div>
                              <Card>
                                 <CardContent className="p-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                       <div>
                                          <h4 className="font-medium">
                                             {day.accommodation.name}
                                          </h4>
                                          <p className="text-sm text-muted-foreground">
                                             {day.accommodation.address}
                                          </p>
                                          {day.accommodation.checkIn &&
                                             day.accommodation.checkOut && (
                                                <p className="text-sm mt-1">
                                                   Check-in:{' '}
                                                   {day.accommodation.checkIn} |
                                                   Check-out:{' '}
                                                   {day.accommodation.checkOut}
                                                </p>
                                             )}
                                          {day.accommodation.cost && (
                                             <p className="text-sm mt-1">
                                                Cost: {day.accommodation.cost}
                                             </p>
                                          )}
                                          {day.accommodation
                                             .bookingReference && (
                                             <p className="text-sm mt-1">
                                                Booking Ref:{' '}
                                                {
                                                   day.accommodation
                                                      .bookingReference
                                                }
                                             </p>
                                          )}
                                       </div>
                                       <Button variant="outline" size="sm">
                                          View Details
                                       </Button>
                                    </div>
                                 </CardContent>
                              </Card>
                           </div>
                        )}

                        {/* Transportation */}
                        {day.transportation && (
                           <div className="mb-6">
                              <div className="flex items-center gap-2 mb-3">
                                 <CarIcon className="h-5 w-5 text-primary" />
                                 <h3 className="font-medium text-lg">
                                    Transportation
                                 </h3>
                              </div>
                              <Card>
                                 <CardContent className="p-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                       <div>
                                          <h4 className="font-medium">
                                             {day.transportation.mode}
                                          </h4>
                                          <p className="text-sm text-muted-foreground">
                                             {day.transportation.details}
                                          </p>
                                          {day.transportation.departureTime &&
                                             day.transportation.arrivalTime && (
                                                <p className="text-sm mt-1">
                                                   Departure:{' '}
                                                   {
                                                      day.transportation
                                                         .departureTime
                                                   }{' '}
                                                   | Arrival:{' '}
                                                   {
                                                      day.transportation
                                                         .arrivalTime
                                                   }
                                                </p>
                                             )}
                                          {day.transportation.cost && (
                                             <p className="text-sm mt-1">
                                                Cost: {day.transportation.cost}
                                             </p>
                                          )}
                                          {day.transportation
                                             .bookingReference && (
                                             <p className="text-sm mt-1">
                                                Booking Ref:{' '}
                                                {
                                                   day.transportation
                                                      .bookingReference
                                                }
                                             </p>
                                          )}
                                       </div>
                                       <Button variant="outline" size="sm">
                                          View Details
                                       </Button>
                                    </div>
                                 </CardContent>
                              </Card>
                           </div>
                        )}

                        {/* Activities Timeline */}
                        <div className="mb-6">
                           <div className="flex items-center gap-2 mb-3">
                              <ClockIcon className="h-5 w-5 text-primary" />
                              <h3 className="font-medium text-lg">
                                 Daily Schedule
                              </h3>
                           </div>
                           <div className="space-y-4">
                              {day.activities.map((activity, index) => (
                                 <div
                                    key={index}
                                    className="relative pl-6 pb-4"
                                 >
                                    {/* Timeline connector */}
                                    {index < day.activities.length - 1 && (
                                       <div className="absolute left-[9px] top-[24px] bottom-0 w-[2px] bg-border" />
                                    )}
                                    <div className="flex flex-col">
                                       <div className="flex items-start gap-2">
                                          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary" />
                                          <div className="flex-1">
                                             <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                                <span className="font-medium">
                                                   {activity.time}
                                                </span>
                                                <h4 className="font-medium">
                                                   {activity.title}
                                                </h4>
                                                {activity.tags &&
                                                   activity.tags.length > 0 && (
                                                      <div className="flex flex-wrap gap-1">
                                                         {activity.tags.map(
                                                            (tag) => (
                                                               <Badge
                                                                  key={tag}
                                                                  variant="secondary"
                                                                  className="text-xs"
                                                               >
                                                                  {tag}
                                                               </Badge>
                                                            )
                                                         )}
                                                      </div>
                                                   )}
                                             </div>
                                             <p className="mt-1 text-sm text-muted-foreground">
                                                {activity.description}
                                             </p>
                                             {activity.location && (
                                                <div className="mt-1 flex items-center gap-1 text-sm">
                                                   <MapPinIcon className="h-3 w-3" />
                                                   <span>
                                                      {activity.location}
                                                   </span>
                                                </div>
                                             )}
                                             {activity.address && (
                                                <p className="mt-0.5 text-xs text-muted-foreground">
                                                   {activity.address}
                                                </p>
                                             )}
                                             {activity.cost && (
                                                <p className="mt-0.5 text-xs text-muted-foreground">
                                                   Cost: {activity.cost}
                                                </p>
                                             )}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Meals */}
                        {day.meals && (
                           <div className="mb-6">
                              <div className="flex items-center gap-2 mb-3">
                                 <UtensilsIcon className="h-5 w-5 text-primary" />
                                 <h3 className="font-medium text-lg">Meals</h3>
                              </div>
                              <div className="grid gap-4 sm:grid-cols-3">
                                 {day.meals.breakfast && (
                                    <Card>
                                       <CardContent className="p-4">
                                          <h4 className="font-medium">
                                             Breakfast
                                          </h4>
                                          <p className="text-sm mt-1">
                                             {day.meals.breakfast.title}
                                          </p>
                                          <p className="text-xs text-muted-foreground mt-1">
                                             {day.meals.breakfast.description}
                                          </p>
                                          {day.meals.breakfast.location && (
                                             <p className="text-xs mt-1">
                                                {day.meals.breakfast.location}
                                             </p>
                                          )}
                                          {day.meals.breakfast.cost && (
                                             <p className="text-xs text-muted-foreground mt-1">
                                                Cost: {day.meals.breakfast.cost}
                                             </p>
                                          )}
                                       </CardContent>
                                    </Card>
                                 )}
                                 {day.meals.lunch && (
                                    <Card>
                                       <CardContent className="p-4">
                                          <h4 className="font-medium">Lunch</h4>
                                          <p className="text-sm mt-1">
                                             {day.meals.lunch.title}
                                          </p>
                                          <p className="text-xs text-muted-foreground mt-1">
                                             {day.meals.lunch.description}
                                          </p>
                                          {day.meals.lunch.location && (
                                             <p className="text-xs mt-1">
                                                {day.meals.lunch.location}
                                             </p>
                                          )}
                                          {day.meals.lunch.cost && (
                                             <p className="text-xs text-muted-foreground mt-1">
                                                Cost: {day.meals.lunch.cost}
                                             </p>
                                          )}
                                       </CardContent>
                                    </Card>
                                 )}
                                 {day.meals.dinner && (
                                    <Card>
                                       <CardContent className="p-4">
                                          <h4 className="font-medium">
                                             Dinner
                                          </h4>
                                          <p className="text-sm mt-1">
                                             {day.meals.dinner.title}
                                          </p>
                                          <p className="text-xs text-muted-foreground mt-1">
                                             {day.meals.dinner.description}
                                          </p>
                                          {day.meals.dinner.location && (
                                             <p className="text-xs mt-1">
                                                {day.meals.dinner.location}
                                             </p>
                                          )}
                                          {day.meals.dinner.cost && (
                                             <p className="text-xs text-muted-foreground mt-1">
                                                Cost: {day.meals.dinner.cost}
                                             </p>
                                          )}
                                       </CardContent>
                                    </Card>
                                 )}
                              </div>
                           </div>
                        )}

                        {/* Notes */}
                        {day.notes && (
                           <div>
                              <div className="flex items-center gap-2 mb-3">
                                 <InfoIcon className="h-5 w-5 text-primary" />
                                 <h3 className="font-medium text-lg">Notes</h3>
                              </div>
                              <Card>
                                 <CardContent className="p-4">
                                    <p className="text-sm">{day.notes}</p>
                                 </CardContent>
                              </Card>
                           </div>
                        )}
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </div>
   );
}
