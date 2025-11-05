
import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tools',
    description: 'A collection of handy non-calculator tools and utilities for various tasks.',
    keywords: ['tools', 'utilities', 'developer tools', 'online tools'],
    alternates: {
      canonical: '/tools',
    },
};

export default function ToolsPage() {
    return (
        <AppLayout>
          <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-3xl font-bold font-headline">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                    <h3 className="text-xl font-semibold">More Tools Coming Soon</h3>
                    <p className="text-muted-foreground mt-2">
                        This section will host a variety of non-calculator utilities. Check back later!
                    </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </AppLayout>
      );
}
