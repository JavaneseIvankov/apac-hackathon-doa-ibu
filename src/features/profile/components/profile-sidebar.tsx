import { Card, CardContent } from '@/shared/components/ui/card';
import { ProfileImageUpload } from '@/features/profile/components/profile-image-upload';
import { Separator } from '@/shared/components/ui/separator';
import { User } from '@/shared/types/user';

export function ProfileSidebar({ user }: { user: User }) {
   return (
      <Card className="h-fit lg:sticky  top-4">
         <CardContent className="p-6 flex flex-col items-center">
            <div className="relative mb-4">
               <ProfileImageUpload
                  currentImage={user?.photo_url}
                  name={user?.name || 'User'}
                  onImageUpload={async (file: File) => {
                     console.log('Uploading file:', file);
                     // Simulate API call
                     await new Promise((resolve) => setTimeout(resolve, 1000));
                  }}
               />
            </div>
            <h2 className="text-xl font-semibold">{user?.name}</h2>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
            <Separator className="my-4" />
            <div className="w-full space-y-2">
               <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Member since</span>
                  <span className="font-medium">May 2023</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Trips planned</span>
                  <span className="font-medium">12</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                     Countries visited
                  </span>
                  <span className="font-medium">8</span>
               </div>
            </div>
         </CardContent>
      </Card>
   );
}
