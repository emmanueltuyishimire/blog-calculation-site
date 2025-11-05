

'use client';

import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mathsCalculatorCategories } from '@/lib/maths-calculators';
import { physicsCalculatorCategories } from '@/lib/physics-calculators';
import { ictToolCategories } from '@/lib/ict-tools';
import { hubs } from '@/lib/hubs';
import { sitePages } from '@/lib/site-pages';
import { GraduationCap, FlaskConical, Cpu, LayoutGrid, FileText } from 'lucide-react';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const lowerCaseQuery = searchQuery.toLowerCase();

  const allCalculators = useMemo(() => {
    return [
      ...mathsCalculatorCategories.flatMap(cat => cat.calculators.map(calc => ({ ...calc, category: 'Maths', categoryIcon: cat.icon, categoryName: cat.name, categoryHref: '/maths' }))),
      ...physicsCalculatorCategories.flatMap(cat => cat.calculators.map(calc => ({ ...calc, category: 'Physics', categoryIcon: cat.icon, categoryName: cat.name, categoryHref: '/coming-soon' }))),
      ...ictToolCategories.flatMap(cat => cat.tools.map(tool => ({ ...tool, category: 'ICT', categoryIcon: cat.icon, categoryName: cat.name, categoryHref: '/tools' })))
    ];
  }, []);

  const filteredCalculators = useMemo(() => {
    if (!searchQuery) return [];
    return allCalculators.filter(calc => calc.name.toLowerCase().includes(lowerCaseQuery));
  }, [lowerCaseQuery, allCalculators]);

  const filteredHubs = useMemo(() => {
    if (!searchQuery) return [];
    return hubs.filter(hub => hub.title.toLowerCase().includes(lowerCaseQuery));
  }, [lowerCaseQuery]);

  const filteredSitePages = useMemo(() => {
    if (!searchQuery) return [];
    return sitePages.filter(page => page.title.toLowerCase().includes(lowerCaseQuery));
  }, [lowerCaseQuery]);

  const noResults = !searchQuery || (
    filteredCalculators.length === 0 &&
    filteredHubs.length === 0 &&
    filteredSitePages.length === 0
  );

  const groupedCalculators = useMemo(() => {
    return filteredCalculators.reduce((acc, calculator) => {
      const { categoryName = 'Unknown' } = calculator;
      if (!acc[categoryName]) {
        acc[categoryName] = {
          calculators: [],
          icon: calculator.categoryIcon,
          type: calculator.category,
          href: calculator.categoryHref,
        };
      }
      acc[categoryName].calculators.push(calculator);
      return acc;
    }, {} as Record<string, { calculators: typeof filteredCalculators, icon: any, type: string | undefined, href: string | undefined }>);
  }, [filteredCalculators]);

  const getCategoryIcon = (type: string | undefined) => {
    if (type === 'Maths') return <GraduationCap className="text-primary size-6" />;
    if (type === 'Physics') return <FlaskConical className="text-primary size-6" />;
    if (type === 'ICT') return <Cpu className="text-primary size-6" />;
    return null;
  }

  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Search Results</h1>
            <p className="mt-2 text-muted-foreground">
                {searchQuery ? `Showing results for "${searchQuery}"` : "Search for calculators, tools, and pages across the site."}
            </p>
        </div>

        {noResults && searchQuery ? (
            <div className="text-center py-16">
                <h3 className="text-xl font-semibold">No Results Found</h3>
                <p className="text-muted-foreground mt-2">
                    Try adjusting your search query or{' '}
                    <Link href="/hubs" className="text-primary hover:underline">
                        explore our hubs
                    </Link>
                    .
                </p>
            </div>
        ) : (
          <div className="space-y-8">

              {Object.keys(groupedCalculators).length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight">Calculators & Tools</h2>
                  {Object.entries(groupedCalculators).map(([categoryName, { calculators, icon: CategoryIcon, type, href }]) => (
                    <div key={categoryName} className="space-y-4 pl-4 border-l-2 border-primary/20">
                      <Link href={href || '#'} className='group'>
                        <h3 className="text-xl font-bold tracking-tight flex items-center gap-2 group-hover:underline">
                            {getCategoryIcon(type)}
                            {type} Calculators
                        </h3>
                      </Link>
                      <Card>
                          <CardHeader>
                            <Link href={href || '#'}>
                              <CardTitle className="flex items-center gap-2 text-lg hover:underline">
                                  <CategoryIcon className="text-primary/80 size-5" />
                                  {categoryName}
                              </CardTitle>
                            </Link>
                          </CardHeader>
                          <CardContent className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                              {calculators.map((calculator) => (
                                  <Button key={calculator.name} asChild variant="outline" size="sm">
                                      <Link href={calculator.href} target="_blank" rel="noopener noreferrer">
                                          {calculator.name}
                                      </Link>
                                  </Button>
                              ))}
                          </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              )}

              {filteredHubs.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <LayoutGrid className="text-primary size-6" />
                        Hub Pages
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filteredHubs.map((hub) => (
                            <Button key={hub.title} asChild variant="outline">
                                <Link href={hub.href}>
                                    <hub.icon className="mr-2 size-4" />
                                    {hub.title}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
              )}

              {filteredSitePages.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <FileText className="text-primary size-6" />
                        Site Pages
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filteredSitePages.map((page) => (
                            <Button key={page.title} asChild variant="outline">
                                <Link href={page.href}>
                                    <page.icon className="mr-2 size-4" />
                                    {page.title}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
              )}
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchContent />
        </Suspense>
    )
}
