import { Card, CardContent } from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';
import { ProfileImageUpload } from '@/features/profile/components/profile-image-upload';
import { User } from '@/shared/types/user';

export function ProfileCard({ user }: { user: User }) {
   return (
      <Card>
         <CardContent className="p-6 flex flex-col items-center">
            <div className="relative mb-4">
               <ProfileImageUpload
                  currentImage={user?.image}
                  name={user?.name || 'User'}
                  onImageUpload={async (file: File) => {
                     console.log('Uploading file:', file);
                     await new Promise((resolve) => setTimeout(resolve, 1000));
                  }}
               />
            </div>
            <h2 className="text-xl font-semibold">{user?.name}</h2>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
            <Separator className="my-4" />
            <div className="w-full space-y-2">
               <ProfileDetail label="Member since" value="May 2023" />
               <ProfileDetail label="Trips planned" value="12" />
               <ProfileDetail label="Countries visited" value="8" />
            </div>
         </CardContent>
      </Card>
   );
}

function ProfileDetail({ label, value }: { label: string; value: string }) {
   return (
      <div className="flex justify-between text-sm">
         <span className="text-muted-foreground">{label}</span>
         <span className="font-medium">{value}</span>
      </div>
   );
}
