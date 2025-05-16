import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from '@/shared/components/ui/card';

export function TripsTab() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>My Trips</CardTitle>
            <CardDescription>View and manage your trips.</CardDescription>
         </CardHeader>
         <CardContent>
            <p>Coming soon: A list of your planned trips will appear here.</p>
         </CardContent>
      </Card>
   );
}
