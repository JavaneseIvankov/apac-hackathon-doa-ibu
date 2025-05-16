import React from 'react';
import { cn } from '../lib/utils';

type BrandProps = {
   variant?: 'logo' | 'text-included';
   className?: string;
};

const Brand: React.FC<BrandProps> = ({ variant = 'withText', className }) => {
   return (
      <div className={cn('flex items-center gap-2', className)}>
         <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
            <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold">
               G
            </span>
         </div>
         {variant !== 'logo' && (
            <span className="text-xl font-bold text-primary">Gemini</span>
         )}
      </div>
   );
};

export default Brand;
