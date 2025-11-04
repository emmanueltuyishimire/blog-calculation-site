'use client';

import AppLayout from '@/components/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';
import { useState } from 'react';

export default function LogoUploadPage() {
  const { toast } = useToast();
  const [currentLogo, setCurrentLogo] = useState<string | null>(null);

  useState(() => {
    if (typeof window !== 'undefined') {
        setCurrentLogo(localStorage.getItem('appLogo'));
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 500 * 1024) { // 500KB limit
        toast({
            variant: 'destructive',
            title: 'File too large',
            description: 'Please upload an image smaller than 500KB.',
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        try {
          localStorage.setItem('appLogo', result);
          setCurrentLogo(result);
          toast({
            title: 'Logo updated!',
            description: 'Your new logo has been saved and will be displayed in the header.',
          });
          // Force a reload of the header or entire page to show the new logo
          window.location.reload();
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Could not save logo',
                description: 'The logo could not be saved to local storage. It might be too large.',
            });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    localStorage.removeItem('appLogo');
    setCurrentLogo(null);
    toast({
        title: 'Logo removed',
        description: 'The logo has been removed from the header.',
    });
    window.location.reload();
  }

  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Upload Your Logo</CardTitle>
            <CardDescription>
              Upload your company logo here. It will be displayed in the header. The image is saved in your browser's local storage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Current Logo</h3>
              <div className="flex items-center justify-center p-4 border rounded-md h-32 bg-muted/50">
                {currentLogo ? (
                  <img src={currentLogo} alt="Current logo" className="max-h-full" />
                ) : (
                  <p className="text-muted-foreground">No logo uploaded</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="logo-upload" className="font-medium">
                Choose a new logo
              </label>
              <Input id="logo-upload" type="file" accept="image/png, image/jpeg, image/svg+xml" onChange={handleFileChange} />
              <p className="text-sm text-muted-foreground">
                Recommended size: 128x128px. Max file size: 500KB.
              </p>
            </div>
            {currentLogo && (
                <Button variant="destructive" onClick={handleRemoveLogo}>
                    Remove Logo
                </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
