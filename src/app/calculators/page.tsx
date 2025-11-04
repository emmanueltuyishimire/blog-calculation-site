
'use client';

import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mathsCalculatorCategories } from '@/lib/maths-calculators';
import { physicsCalculatorCategories } from '@/lib/physics-calculators';
import { ictToolCategories } from '@/lib/ict-tools';
import { GraduationCap, FlaskConical, Cpu } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CalculatorsPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const filteredMathsCategories = useMemo(() => {
    if (!searchQuery) return mathsCalculatorCategories;
    return mathsCalculatorCategories.map(category => ({
      ...category,
      calculators: category.calculators.filter(calculator =>
        calculator.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter(category => category.calculators.length > 0);
  }, [searchQuery]);

  const filteredPhysicsCategories = useMemo(() => {
    if (!searchQuery) return physicsCalculatorCategories;
    return physicsCalculatorCategories.map(category => ({
      ...category,
      calculators: category.calculators.filter(calculator =>
        calculator.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter(category => category.calculators.length > 0);
  }, [searchQuery]);

  const filteredIctCategories = useMemo(() => {
    if (!searchQuery) return ictToolCategories;
    return ictToolCategories.map(category => ({
      ...category,
      tools: category.tools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter(category => category.tools.length > 0);
  }, [searchQuery]);

  const noResults = filteredMathsCategories.length === 0 && filteredPhysicsCategories.length === 0 && filteredIctCategories.length === 0;

  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight font-headline">All Calculators &amp; Tools</h1>
            <p className="mt-2 text-muted-foreground">
                {searchQuery ? `Showing results for "${searchQuery}"` : "Explore our full suite of calculators and tools, organized by category."}
            </p>
        </div>

        {noResults ? (
            <div className="text-center py-16">
                <h3 className="text-xl font-semibold">No Results Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search query or view all calculators and tools.</p>
            </div>
        ) : (
          <div className="space-y-8">
              {filteredMathsCategories.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <GraduationCap className="text-primary size-7" />
                        Maths Calculators
                    </h2>
                    {filteredMathsCategories.map((category) => (
                        <Card key={category.name}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <category.icon className="text-primary/80 size-6" />
                                    {category.name}
                                </CardTitle>
                                {category.description && <CardDescription>{category.description}</CardDescription>}
                            </CardHeader>
                            <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {category.calculators.map((calculator) => (
                                    <Button key={calculator.name} asChild variant="outline">
                                        <Link href={calculator.href}>
                                            {calculator.name}
                                        </Link>
                                    </Button>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
              )}

              {filteredPhysicsCategories.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <FlaskConical className="text-primary size-7" />
                        Physics Calculators
                    </h2>
                    {filteredPhysicsCategories.map((category) => (
                        <Card key={category.name}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <category.icon className="text-primary/80 size-6" />
                                    {category.name}
                                </CardTitle>
                                {category.description && <CardDescription>{category.description}</CardDescription>}
                            </CardHeader>
                            <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {category.calculators.map((calculator) => (
                                    <Button key={calculator.name} asChild variant="outline">
                                        <Link href={calculator.href}>
                                            {calculator.name}
                                        </Link>
                                    </Button>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
              )}

            {filteredIctCategories.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Cpu className="text-primary size-7" />
                        ICT & Tech Utilities
                    </h2>
                    {filteredIctCategories.map((category) => (
                        <Card key={category.name}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <category.icon className="text-primary/80 size-6" />
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
        )}
      </div>
    </AppLayout>
  );
}
