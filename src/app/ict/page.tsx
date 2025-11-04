
'use client';

import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ictToolCategories } from '@/lib/ict-tools';
import type { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect } from 'react';

const metadata: Metadata = {
    title: 'ICT & Tech Utilities Hub',
    description: 'A collection of handy online tools for developers, network engineers, and tech enthusiasts. Includes networking, server, coding, and security utilities.',
    keywords: ['ict tools', 'tech utilities', 'developer tools', 'networking calculator', 'subnet calculator', 'code generator'],
    alternates: {
      canonical: '/ict',
    },
};

export default function IctPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const filteredIctCategories = useMemo(() => {
    if (!searchQuery) return ictToolCategories;
    return ictToolCategories.map(category => ({
      ...category,
      tools: category.tools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter(category => category.tools.length > 0);
  }, [searchQuery]);

  const noResults = filteredIctCategories.length === 0;

  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight font-headline">ICT & Tech Utilities</h1>
            <p className="mt-2 text-muted-foreground">
                {searchQuery ? `Showing results for "${searchQuery}"` : "A collection of handy tools for developers, network engineers, and tech enthusiasts."}
            </p>
        </div>

        {noResults ? (
            <div className="text-center py-16">
                <h3 className="text-xl font-semibold">No Results Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search query or view all tools.</p>
            </div>
        ) : (
            <div className="space-y-8">
            {filteredIctCategories.map((category) => (
                <Card key={category.name}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <category.icon className="text-primary size-6" />
                            {category.name}
                        </CardTitle>
                        {category.description && <CardDescription>{category.description}</CardDescription>}
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {category.tools.map((tool) => (
                            <Button key={tool.name} asChild variant="outline">
                                <Link href={tool.href}>
                                    {tool.name}
                                </Link>
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            ))}
            </div>
        )}
      </div>
    </AppLayout>
  );
}
