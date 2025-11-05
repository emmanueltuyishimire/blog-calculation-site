
'use client';

import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mathsCalculatorCategories } from '@/lib/maths-calculators';
import { physicsCalculatorCategories } from '@/lib/physics-calculators';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect, Suspense } from 'react';
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'All Calculators – Math & Physics Tools',
//     description: 'Browse our complete collection of free online calculators. Find tools for both mathematics and physics, from basic arithmetic to advanced scientific computations.',
//     keywords: ['all calculators', 'math calculators', 'physics calculators', 'free online tools', 'scientific calculator'],
//     alternates: {
//       canonical: '/calculators',
//     },
// };

function CalculatorsContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const allCategories = useMemo(() => [
      ...mathsCalculatorCategories.map(c => ({...c, type: 'Maths'})),
      ...physicsCalculatorCategories.map(c => ({...c, type: 'Physics'})),
  ], []);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return allCategories;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return allCategories.map(category => ({
      ...category,
      calculators: category.calculators.filter(calculator =>
        calculator.name.toLowerCase().includes(lowerCaseQuery)
      ),
    })).filter(category => category.calculators.length > 0);
  }, [searchQuery, allCategories]);

  const noResults = filteredCategories.length === 0;

  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight font-headline">All Calculators</h1>
            <p className="mt-2 text-muted-foreground">
                {searchQuery ? `Showing results for "${searchQuery}"` : "Your free resource for all things math and science. From basic arithmetic to advanced physics."}
            </p>
        </div>
        
        {noResults && searchQuery ? (
            <div className="text-center py-16">
                <h3 className="text-xl font-semibold">No Results Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search query or view all calculators.</p>
            </div>
        ) : (
            <div className="space-y-8">
            {filteredCategories.map((category) => (
                <Card key={`${category.type}-${category.name}`}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <category.icon className="text-primary size-6" />
                            {category.name}
                        </CardTitle>
                        {category.description && <CardDescription>{category.description}</CardDescription>}
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {category.calculators.map((calculator) => (
                            <Button key={calculator.name} asChild variant="outline">
                                <Link href={calculator.href} target="_blank" rel="noopener noreferrer">
                                    {calculator.name}
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


export default function CalculatorsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CalculatorsContent />
        </Suspense>
    )
}
