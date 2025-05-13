'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card } from '@/shared/components/ui/card';
import { Send, Calendar, MapPin, PlaneLanding, Info } from 'lucide-react';
import clsx from 'clsx';

interface TripInputProps {
   className?: string;
}

export function TripInput({ className }: TripInputProps) {
   const [inputValue, setInputValue] = useState('');
   const [isGenerating, setIsGenerating] = useState(false);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!inputValue.trim()) return;

      setIsGenerating(true);

      // Simulate API call to generate trip
      setTimeout(() => {
         setIsGenerating(false);
         setInputValue('');
         // In a real app, you would handle the generated trip here
      }, 2000);
   };

   return (
      <Card className="p-4 md:p-6 bg-background border shadow-sm">
         <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
               <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tell me about your dream trip..."
                  className={clsx(
                     'h-12 md:h-14 pl-4 pr-12 rounded-xl bg-background shadow-sm border-input',
                     className
                  )}
               />
               <Button
                  type="submit"
                  size="icon"
                  disabled={isGenerating || !inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary hover:bg-primary/90"
               >
                  <Send className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
                  <span className="sr-only">Send</span>
               </Button>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
               <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs md:text-sm rounded-full gap-1 md:gap-2 h-8 md:h-9"
                  onClick={() =>
                     setInputValue('Create a weekend trip to Paris')
                  }
               >
                  <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                  Weekend in Paris
               </Button>
               <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs md:text-sm rounded-full gap-1 md:gap-2 h-8 md:h-9"
                  onClick={() =>
                     setInputValue('Plan a family vacation to Disney World')
                  }
               >
                  <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                  Family vacation
               </Button>
               <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs md:text-sm rounded-full gap-1 md:gap-2 h-8 md:h-9"
                  onClick={() =>
                     setInputValue(
                        'Plan a backpacking trip through Southeast Asia'
                     )
                  }
               >
                  <PlaneLanding className="h-3 w-3 md:h-4 md:w-4" />
                  Backpacking adventure
               </Button>
               <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs md:text-sm rounded-full gap-1 md:gap-2 h-8 md:h-9"
                  onClick={() =>
                     setInputValue('Romantic getaway for anniversary')
                  }
               >
                  <Info className="h-3 w-3 md:h-4 md:w-4" />
                  Romantic getaway
               </Button>
            </div>
         </form>
      </Card>
   );
}
