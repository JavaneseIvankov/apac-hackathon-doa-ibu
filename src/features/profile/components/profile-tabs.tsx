import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from '@/shared/components/ui/tabs';
import { AccountTab } from './tabs/account-tab';
import { SecurityTab } from './tabs/security-tab';
import { PreferencesTab } from './tabs/preferences-tab';
import { TripsTab } from './tabs/trips-tab';
import { User } from '@/shared/types/user';

export function ProfileTabs({ user }: { user: User }) {
   return (
      <Tabs defaultValue="account">
         <TabsList className="mb-6">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
         </TabsList>

         <TabsContent value="account">
            <AccountTab user={user} />
         </TabsContent>
         <TabsContent value="security">
            <SecurityTab />
         </TabsContent>
         <TabsContent value="preferences">
            <PreferencesTab />
         </TabsContent>
      </Tabs>
   );
}
