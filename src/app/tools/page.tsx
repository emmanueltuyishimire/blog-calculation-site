
'use client';

import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ictToolCategories } from '@/lib/ict-tools';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect, Suspense } from 'react';

function ToolsContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const filteredIctCategories = useMemo(() => {
    if (!searchQuery) return ictToolCategories;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return ictToolCategories.map(category => ({
      ...category,
      tools: category.tools.filter(tool =>
        tool.name.toLowerCase().includes(lowerCaseQuery)
      ),
    })).filter(category => category.tools.length > 0);
  }, [searchQuery]);

  const noResults = filteredIctCategories.length === 0;

  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight font-headline">ICT & Tech Utilities</h1>
            <p className="mt-2 text-muted-foreground">
                {searchQuery ? `Showing results for "${searchQuery}"` : "A collection of handy tools for developers, network engineers, and tech enthusiasts."}
            </p>
        </div>

        {noResults && searchQuery ? (
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
                                <Link href={tool.href} target="_blank" rel="noopener noreferrer">
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

export default function ToolsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ToolsContent />
        </Suspense>
    )
}
