import { ModeToggle } from '@/shared/components/ModeToggle';
// import UnstyledLink from "@/shared/components/UnstyledLink";
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { LoaderCircle, MenuIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';

export default function DesignSystemPage() {
   return (
      <section className="container mx-auto">
         <div className="layout mt-20 space-y-4">
            <ModeToggle />
            <div>
               <h1>Design System Page</h1>
               <p>These are the components that are used in the app.</p>
            </div>

            <div className="space-y-2">
               <h2>Color</h2>
               <div className="p-4 border space-y-4">
                  <div>
                     <h3>Default</h3>
                     <div className="flex flex-row gap-2 flex-wrap">
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-background flex items-center justify-center">
                           <span>Background</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-foreground flex items-center justify-center text-background">
                           <span>Foreground</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-card flex items-center justify-center">
                           <span>Card Background</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-card-foreground flex items-center justify-center text-card">
                           <span>Card Foreground</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-popover flex items-center justify-center">
                           <span>Popover Background</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-popover-foreground flex items-center justify-center text-popover">
                           <span>Popover Foreground</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-primary flex items-center justify-center">
                           <span>Primary</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-primary-foreground primary-foreground flex items-center justify-center">
                           <span>Primary Foreground</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-secondary flex items-center justify-center">
                           <span>Secondary</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-secondary-foreground flex items-center justify-center">
                           <span>Secondary Foreground</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-muted flex items-center justify-center">
                           <span>Muted</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-muted-foreground flex items-center justify-center">
                           <span>Muted Foreground</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-accent flex items-center justify-center">
                           <span>Accent</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-accent-foreground flex items-center justify-center">
                           <span>Accent Foreground</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-destructive flex items-center justify-center">
                           <span>Destructive</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-destructive-foreground flex items-center justify-center">
                           <span>Destructive Foreground</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-border flex items-center justify-center">
                           <span>Border</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-input flex items-center justify-center">
                           <span>Input</span>
                        </div>
                        <div className="p-4 h-12 rounded-md border border-neutral-900 bg-ring flex items-center justify-center">
                           <span>Ring</span>
                        </div>
                     </div>
                  </div>

                  <div>
                     <h3>Primary</h3>
                     <div className="flex flex-row gap-2">
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-50 flex items-center justify-center">
                           <span>50</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-100 flex items-center justify-center">
                           <span>100</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-200 flex items-center justify-center">
                           <span>200</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-300 flex items-center justify-center">
                           <span>300</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-400 flex items-center justify-center">
                           <span>400</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-500 flex items-center justify-center">
                           <span>500</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-600 flex items-center justify-center">
                           <span>600</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-700 flex items-center justify-center">
                           <span>700</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-800 flex items-center justify-center">
                           <span>800</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-primary-900 flex items-center justify-center">
                           <span>900</span>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h3>Secondary</h3>
                     <div className="flex flex-row gap-2">
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-50 flex items-center justify-center">
                           <span>50</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-100 flex items-center justify-center">
                           <span>100</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-200 flex items-center justify-center">
                           <span>200</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-300 flex items-center justify-center">
                           <span>300</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-400 flex items-center justify-center">
                           <span>400</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-500 flex items-center justify-center">
                           <span>500</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-600 flex items-center justify-center">
                           <span>600</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-700 flex items-center justify-center">
                           <span>700</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-800 flex items-center justify-center">
                           <span>800</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-secondary-900 flex items-center justify-center">
                           <span>900</span>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h3>Neutral</h3>
                     <div className="flex flex-row gap-2">
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-50 flex items-center justify-center">
                           <span>50</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-100 flex items-center justify-center">
                           <span>100</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-200 flex items-center justify-center">
                           <span>200</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-300 flex items-center justify-center">
                           <span>300</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-400 flex items-center justify-center">
                           <span>400</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-500 flex items-center justify-center">
                           <span>500</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-600 flex items-center justify-center">
                           <span>600</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-700 flex items-center justify-center">
                           <span>700</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-800 flex items-center justify-center">
                           <span>800</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-neutral-900 flex items-center justify-center">
                           <span>900</span>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h3>Accepted</h3>
                     <div className="flex flex-row gap-2">
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-50 flex items-center justify-center">
                           <span>50</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-100 flex items-center justify-center">
                           <span>100</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-200 flex items-center justify-center">
                           <span>200</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-300 flex items-center justify-center">
                           <span>300</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-400 flex items-center justify-center">
                           <span>400</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-500 flex items-center justify-center">
                           <span>500</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-600 flex items-center justify-center">
                           <span>600</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-700 flex items-center justify-center">
                           <span>700</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-800 flex items-center justify-center">
                           <span>800</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-accepted-900 flex items-center justify-center">
                           <span>900</span>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h3>Rejected</h3>
                     <div className="flex flex-row gap-2">
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-50 flex items-center justify-center">
                           <span>50</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-100 flex items-center justify-center">
                           <span>100</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-200 flex items-center justify-center">
                           <span>200</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-300 flex items-center justify-center">
                           <span>300</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-400 flex items-center justify-center">
                           <span>400</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-500 flex items-center justify-center">
                           <span>500</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-600 flex items-center justify-center">
                           <span>600</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-700 flex items-center justify-center">
                           <span>700</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-800 flex items-center justify-center">
                           <span>800</span>
                        </div>
                        <div className="w-12 h-12 rounded-md border border-neutral-900 bg-rejected-900 flex items-center justify-center">
                           <span>900</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-2">
               <h2>Typography</h2>
               <div className="p-4 border">
                  <h1 className="font-display text-display">Display</h1>
                  <h2 className="font-display text-heading">Heading</h2>
                  <h3 className="text-title">Title</h3>
                  <p className="text-body">Body</p>
                  <span className="text-detail">Detail</span>
               </div>
            </div>

            <div className="space-y-2">
               <div>
                  <h1>Componenets</h1>
                  <p>
                     Some of the components are from{' '}
                     <Button variant="link" className="p-0 text-blue-800">
                        <Link href="http://ui.shadcn.com">shadcn</Link>
                     </Button>
                     ,{' '}
                     <Button variant="link" className="p-0 text-blue-800">
                        <Link href="http://originui.com">origin</Link>
                     </Button>
                     ,{' '}
                     <Button variant="link" className="p-0 text-blue-800">
                        <Link href="http://twblocks.com">twblocks</Link>
                     </Button>
                     ,{' '}
                     <Button variant="link" className="p-0 text-blue-800">
                        <Link href="https://ui.aceternity.com/">
                           aceternity
                        </Link>
                     </Button>
                  </p>
               </div>
               <div className="p-4 border flex flex-col gap-4">
                  <div className="space-y-2">
                     <h3>Buttons</h3>
                     <div className="flex flex-row gap-2 items-center">
                        <Button>
                           <PlusIcon /> Primary
                        </Button>
                        <Button disabled>
                           <LoaderCircle
                              className="-ms-1 me-2 animate-spin"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                           />
                           Loading
                        </Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                        <Button size="sm">Small</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon">
                           <MenuIcon />
                        </Button>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <h3>Inputs</h3>
                     <div className="flex flex-row gap-2 items-center">
                        <Input placeholder="Default" />
                        <Input placeholder="File" type="file" />
                        <Input placeholder="Disabled" disabled />
                        <Textarea placeholder="Textarea" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
