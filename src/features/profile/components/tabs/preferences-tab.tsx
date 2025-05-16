import { Loader2 } from 'lucide-react';
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from '../../../../shared/components/ui/card';
import { useGetProfileQuery } from '../../query';
import { PreferencesForm } from '../preferences-form';

export function PreferencesTab() {
   const { data, isLoading } = useGetProfileQuery();

   if (isLoading || !data) {
      return <Loader2 className="h-8 w-8 animate-spin text-primary" />;
   }

   if (!data?.ok) {
      return <h3>{'Something went wrong :('}</h3>;
   }

   const pref = data.data.payload.user.preferences;

   return (
      <Card>
         <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Update your travel preferences.</CardDescription>
         </CardHeader>
         <CardContent>
            <PreferencesForm defaultPreferences={pref} />
         </CardContent>
      </Card>
   );
}
