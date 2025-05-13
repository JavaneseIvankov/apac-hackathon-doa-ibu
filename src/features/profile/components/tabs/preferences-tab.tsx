import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from '../../../../shared/components/ui/card';
import { PreferencesForm } from '../preferences-form';

export function PreferencesTab() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Update your travel preferences.</CardDescription>
         </CardHeader>
         <CardContent>
            <PreferencesForm />
         </CardContent>
      </Card>
   );
}
