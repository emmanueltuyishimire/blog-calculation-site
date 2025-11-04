import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guides and Articles Blog',
    description: 'Explore our blog for helpful guides, tutorials, and articles on finance, health, productivity, and smart living to get the most out of our calculators.',
    keywords: ['blog', 'guides', 'tutorials', 'personal finance help', 'health tips', 'productivity articles'],
    alternates: {
      canonical: '/blog',
    },
};

export default function BlogPage() {
  return (
    <AppLayout>
      <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold font-headline">Our Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-16">
                <h3 className="text-xl font-semibold">Coming Soon</h3>
                <p className="text-muted-foreground mt-2">
                    We're currently writing articles. Check back soon for helpful guides!
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
