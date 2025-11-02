'use client';

import AppLayout from '@/components/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Construction } from 'lucide-react';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <AppLayout>
      <div className="flex flex-1 items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-lg text-center">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Construction className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="mt-4 text-3xl font-bold">Coming Soon!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground">
              This hub is currently under construction. We're working hard to bring you a new set of powerful tools.
            </p>
            <p className="text-muted-foreground">
              Check back soon to see what's new!
            </p>
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back to Homepage
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
