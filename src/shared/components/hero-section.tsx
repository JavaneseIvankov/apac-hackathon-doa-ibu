import { Send, Calendar, MapPin, PlaneLanding, Info } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

export default function HeroSection() {
   return (
      <section className="relative py-20 md:py-32">
         <div className="absolute inset-0 -z-10 bg-background" />
         <div className="container flex flex-col items-center text-center">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
               Hey, I&apos;m Gemini your personal trip planner
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
               Tell me what you want, and I&apos;ll handle the rest: flights,
               hotels, itineraries, in seconds.
            </p>

            <div className="mt-12 w-full max-w-2xl">
               <div className="relative">
                  <Input
                     placeholder="Tell me about your dream trip..."
                     className="h-14 pl-4 pr-12 rounded-xl bg-background shadow-sm border-input"
                  />
                  <Button
                     size="icon"
                     className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
                  >
                     <Send className="h-5 w-5 text-primary-foreground" />
                     <span className="sr-only">Send</span>
                  </Button>
               </div>

               <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button variant="outline" size="sm" edge="rounded">
                     <Calendar className="h-4 w-4" />
                     Create a new trip
                  </Button>
                  <Button variant="outline" size="sm" edge="rounded">
                     <MapPin className="h-4 w-4" />
                     Plan Italy trip
                  </Button>
                  <Button variant="outline" size="sm" edge="rounded">
                     <PlaneLanding className="h-4 w-4" />
                     Weekend getaway
                  </Button>
                  <Button variant="outline" size="sm" edge="rounded">
                     <Info className="h-4 w-4" />
                     How it works
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}
