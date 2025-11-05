

'use client';

import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mathsCalculatorCategories } from '@/lib/maths-calculators';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect } from 'react';

export default function MathsContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const filteredMathsCategories = useMemo(() => {
    if (!searchQuery) return mathsCalculatorCategories;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return mathsCalculatorCategories.map(category => ({
      ...category,
      calculators: category.calculators.filter(calculator =>
        calculator.name.toLowerCase().includes(lowerCaseQuery)
      ),
    })).filter(category => category.calculators.length > 0);
  }, [searchQuery]);

  const noResults = filteredMathsCategories.length === 0;

  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Maths Calculators</h1>
            <p className="mt-2 text-muted-foreground">
                {searchQuery ? `Showing results for "${searchQuery}"` : "Your free resource for all things math. From basic arithmetic to advanced calculus."}
            </p>
        </div>
        
        {noResults && searchQuery ? (
            <div className="text-center py-16">
                <h3 className="text-xl font-semibold">No Results Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search query or view all calculators.</p>
            </div>
        ) : (
            <div className="space-y-8">
            {filteredMathsCategories.map((category) => (
                <Card key={category.name}>
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
