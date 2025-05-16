import {
   useForm,
   Controller,
   Control,
   FieldErrors,
   UseFormRegister,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Label } from '@/shared/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group';
import { useState } from 'react';
import { PreferencesFormValues, preferencesSchema } from '@/features/auth/dto';
import { useAddPreferencesMutation, useGetProfileQuery } from '../query';
import { Loader2 } from 'lucide-react';

function TravelStyle({ control }: { control: Control<PreferencesFormValues> }) {
   return (
      <div className="space-y-4">
         <Label>Travel Style</Label>
         <Controller
            name="travelStyle"
            control={control}
            render={({ field }) => (
               <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="space-y-1"
               >
                  {[
                     { value: 'budget_traveler', label: 'Budget Traveler' },
                     { value: 'balanced', label: 'Balanced' },
                     { value: 'business_traveler', label: 'Business Traveler' },
                     { value: 'comfort_seeker', label: 'Comfort Seeker' },
                     { value: 'luxury_traveler', label: 'Luxury Traveler' },
                  ].map((option) => (
                     <Label
                        key={option.value}
                        className="flex items-center space-x-2"
                     >
                        <RadioGroupItem value={option.value} />
                        <span>{option.label}</span>
                     </Label>
                  ))}
               </RadioGroup>
            )}
         />
      </div>
   );
}

function Interests({
   control,
   errors,
}: {
   control: Control<PreferencesFormValues>;
   errors: FieldErrors<PreferencesFormValues>;
}) {
   return (
      <div className="space-y-4">
         <Label>Interests / Activities (Select up to 4)</Label>
         <Controller
            name="interests"
            control={control}
            render={({ field }) => {
               const { value, onChange } = field;

               const toggleInterest = (interest: string) => {
                  if (value?.includes(interest)) {
                     onChange(value.filter((i: string) => i !== interest));
                  } else {
                     onChange([...value, interest]);
                  }
               };

               return (
                  <div className="space-y-2">
                     {[
                        'beaches',
                        'mountains',
                        'cities',
                        'food_cuisine',
                        'history_culture',
                        'adventure',
                        'nature_wildlife',
                        'nightlife',
                        'shopping',
                     ].map((interest) => (
                        <Label
                           key={interest}
                           className="flex items-center space-x-2"
                        >
                           <Checkbox
                              checked={value?.includes(interest)}
                              onCheckedChange={() => toggleInterest(interest)}
                           />
                           <span>{interest.replace('_', ' ')}</span>
                        </Label>
                     ))}
                  </div>
               );
            }}
         />
         {errors.interests && (
            <p className="text-red-500 text-sm">{errors.interests.message}</p>
         )}
      </div>
   );
}

function AccommodationPreferences({
   register,
}: {
   register: UseFormRegister<PreferencesFormValues>;
}) {
   return (
      <div className="space-y-4">
         <Label>Accommodation Preferences</Label>
         <div className="space-y-1">
            {['hotels', 'apartments', 'hostels', 'camping', 'unique_stays'].map(
               (accommodation) => (
                  <Label
                     key={accommodation}
                     className="flex items-center space-x-2 space-y-1"
                  >
                     <Checkbox
                        value={accommodation}
                        {...register('accommodations')}
                     />
                     <span>{accommodation.replace('_', ' ')}</span>
                  </Label>
               )
            )}
         </div>
      </div>
   );
}

function TripDuration({
   control,
}: {
   control: Control<PreferencesFormValues>;
}) {
   return (
      <div className="space-y-4">
         <Label>Typical Trip Duration</Label>
         <Controller
            name="tripDuration"
            control={control}
            render={({ field }) => (
               <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="space-y-1"
               >
                  {[
                     { value: 'weekend', label: 'Weekend' },
                     { value: '1_week', label: '1 Week' },
                     { value: '2_weeks', label: '2 Weeks' },
                     { value: '1_month_plus', label: '1 Month or More' },
                  ].map((option) => (
                     <Label
                        key={option.value}
                        className="flex items-center space-x-2"
                     >
                        <RadioGroupItem value={option.value} />
                        <span>{option.label}</span>
                     </Label>
                  ))}
               </RadioGroup>
            )}
         />
      </div>
   );
}

function TripBudget({ control }: { control: Control<PreferencesFormValues> }) {
   return (
      <div className="space-y-4">
         <Label>Typical Trip Budget</Label>
         <Controller
            name="tripBudget"
            control={control}
            render={({ field }) => (
               <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="space-y-1"
               >
                  {[
                     { value: 'budget_low', label: 'Low Budget' },
                     { value: 'budget_medium', label: 'Medium Budget' },
                     { value: 'budget_high', label: 'High Budget' },
                  ].map((option) => (
                     <Label
                        key={option.value}
                        className="flex items-center space-x-2"
                     >
                        <RadioGroupItem value={option.value} />
                        <span>{option.label}</span>
                     </Label>
                  ))}
               </RadioGroup>
            )}
         />
      </div>
   );
}

export function PreferencesForm({
   defaultPreferences,
}: {
   defaultPreferences: PreferencesFormValues;
}) {
   const [preferencesSuccess, setPreferencesSuccess] = useState(false);
   const { mutate: addPreferences, isPending } = useAddPreferencesMutation();

   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<PreferencesFormValues>({
      resolver: zodResolver(preferencesSchema),
      defaultValues: {
         travelStyle: defaultPreferences.travelStyle ?? 'balanced',
         interests: defaultPreferences.interests ?? [],
         accommodations: defaultPreferences.accommodations ?? [],
         tripDuration: defaultPreferences.tripDuration ?? '1_week',
         tripBudget: defaultPreferences.tripBudget ?? 'budget_medium',
      },
   });

   const onSubmit = (data: PreferencesFormValues) => {
      setPreferencesSuccess(false);
      addPreferences(data);

      // Simulate API call
      setTimeout(() => {
         // setIsUpdating(false);
         setPreferencesSuccess(true);
         console.log('Preferences data:', data);
      }, 1000);
   };

   return (
      <Card>
         <CardHeader>
            <CardTitle>Travel Preferences</CardTitle>
            <CardDescription>
               Customize your travel preferences below.
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               <TravelStyle control={control} />
               <Interests control={control} errors={errors} />
               <AccommodationPreferences register={register} />
               <TripDuration control={control} />
               <TripBudget control={control} />
               <Button type="submit" disabled={isPending}>
                  {isPending ? 'Saving...' : 'Save Preferences'}
               </Button>
               {preferencesSuccess && (
                  <p className="text-green-500 text-sm">
                     Preferences saved successfully!
                  </p>
               )}
            </form>
         </CardContent>
      </Card>
   );
}
