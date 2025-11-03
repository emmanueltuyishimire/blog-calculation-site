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
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is where the blog/guides will be.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
