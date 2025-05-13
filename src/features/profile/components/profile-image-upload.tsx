'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import { Button } from '@/shared/components/ui/button';
import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '@/shared/components/ui/avatar';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/shared/components/ui/dialog';
import { Camera, Upload, X, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface ProfileImageUploadProps {
   currentImage?: string;
   name: string;
   onImageUpload: (file: File) => Promise<void>;
}

export function ProfileImageUpload({
   currentImage,
   name,
   onImageUpload,
}: ProfileImageUploadProps) {
   const [isOpen, setIsOpen] = useState(false);
   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
   const [isUploading, setIsUploading] = useState(false);
   const fileInputRef = useRef<HTMLInputElement>(null);

   // Get user initials for avatar fallback
   const getInitials = (name: string) => {
      return name
         .split(' ')
         .map((n) => n[0])
         .join('')
         .toUpperCase();
   };

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Create a preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
   };

   const handleUpload = async () => {
      const file = fileInputRef.current?.files?.[0];
      if (!file) return;

      setIsUploading(true);
      try {
         await onImageUpload(file);
         setIsOpen(false);
      } catch (error) {
         console.error('Error uploading image:', error);
      } finally {
         setIsUploading(false);
      }
   };

   const handleCancel = () => {
      setPreviewUrl(null);
      if (fileInputRef.current) {
         fileInputRef.current.value = '';
      }
      setIsOpen(false);
   };

   return (
      <div className="relative">
         <Avatar className="h-24 w-24">
            {currentImage ? (
               <AvatarImage
                  src={currentImage || '/placeholder.svg'}
                  alt={name}
               />
            ) : (
               <AvatarFallback className="text-xl">
                  {getInitials(name)}
               </AvatarFallback>
            )}
         </Avatar>

         <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
               <Button
                  size="icon"
                  variant="outline"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background"
                  aria-label="Upload profile picture"
               >
                  <Camera className="h-4 w-4" />
               </Button>
            </DialogTrigger>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Upload profile picture</DialogTitle>
                  <DialogDescription>
                     Choose a new profile picture. JPG, PNG or GIF, max 5MB.
                  </DialogDescription>
               </DialogHeader>

               <div className="flex flex-col items-center justify-center py-4">
                  {previewUrl ? (
                     <div className="relative">
                        <Image
                           src={previewUrl || '/placeholder.svg'}
                           alt="Preview"
                           className="h-40 w-40 rounded-full object-cover"
                        />
                        <Button
                           size="icon"
                           variant="outline"
                           className="absolute top-0 right-0 h-8 w-8 rounded-full bg-background"
                           onClick={() => {
                              setPreviewUrl(null);
                              if (fileInputRef.current) {
                                 fileInputRef.current.value = '';
                              }
                           }}
                        >
                           <X className="h-4 w-4" />
                        </Button>
                     </div>
                  ) : (
                     <div className="flex flex-col items-center">
                        <div className="mb-4 h-40 w-40 rounded-full bg-muted flex items-center justify-center">
                           <Upload className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <input
                           ref={fileInputRef}
                           type="file"
                           accept="image/*"
                           className="hidden"
                           onChange={handleFileChange}
                           id="profile-image-upload"
                        />
                        <label htmlFor="profile-image-upload">
                           <Button
                              variant="outline"
                              className="cursor-pointer"
                              asChild
                           >
                              <span>Select image</span>
                           </Button>
                        </label>
                     </div>
                  )}
               </div>

               <DialogFooter>
                  <Button variant="outline" onClick={handleCancel}>
                     Cancel
                  </Button>
                  <Button
                     onClick={handleUpload}
                     disabled={!previewUrl || isUploading}
                  >
                     {isUploading ? (
                        <>
                           <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                           Uploading...
                        </>
                     ) : (
                        'Upload'
                     )}
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
}
