import type React from 'react';
import Image from 'next/image';
import { MapPin, Calendar, PlaneLanding } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';

export default function FeaturesSection() {
   return (
      <section className="py-12 md:py-16 lg:py-24">
         <div className="container px-4 sm:px-6">
            <div className="relative mx-auto overflow-hidden rounded-xl md:rounded-2xl">
               <Image
                  src="/placeholder.svg?height=600&width=1200"
                  width={1200}
                  height={600}
                  alt="Beautiful travel destination"
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 sm:p-6 md:p-10 text-white">
                     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2">
                        Discover your next adventure
                     </h2>
                     <p className="text-sm sm:text-base max-w-lg">
                        Let Gemini help you plan the perfect trip tailored to
                        your preferences and budget.
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-8 md:mt-16 grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
               <FeatureCard
                  icon={<MapPin className="h-5 w-5 text-primary" />}
                  title="Personalized Itineraries"
                  description="Get custom travel plans based on your interests, time, and budget."
               />
               <FeatureCard
                  icon={<Calendar className="h-5 w-5 text-primary" />}
                  title="Smart Booking"
                  description="Find the best deals on flights, hotels, and activities all in one place."
               />
               <FeatureCard
                  icon={<PlaneLanding className="h-5 w-5 text-primary" />}
                  title="Travel Assistant"
                  description="Get 24/7 support during your trip with real-time updates and recommendations."
                  className="sm:col-span-2 lg:col-span-1"
               />
            </div>
         </div>
      </section>
   );
}

interface FeatureCardProps {
   icon: React.ReactNode;
   title: string;
   description: string;
   className?: string;
}

function FeatureCard({
   icon,
   title,
   description,
   className = '',
}: FeatureCardProps) {
   return (
      <Card className={className}>
         <CardHeader className="pb-2 space-y-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-3">
               {icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold">{title}</h3>
         </CardHeader>
         <CardContent>
            <p className="text-sm md:text-base text-muted-foreground">
               {description}
            </p>
         </CardContent>
      </Card>
   );
}
