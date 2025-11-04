
import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { hubs } from '@/lib/hubs';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Hubs',
    description: 'Explore all the specialized calculator and tool hubs available on Calculation Site. Find tools for math, finance, health, tech, and more.',
    keywords: ['all hubs', 'calculator hubs', 'tool directory', 'math hub', 'finance hub', 'health hub'],
    alternates: {
      canonical: '/hubs',
    },
};

export default function HubsPage() {
  return (
    <AppLayout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight font-headline">All Hubs</h1>
            <p className="mt-2 text-muted-foreground">
                Explore our collections of specialized calculators and tools.
            </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {hubs.map((hub) => {
                const Icon = hub.icon;
                return (
                    <Card key={hub.title} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader className="flex-row items-center gap-4">
                            <Icon className="size-10 text-primary" aria-hidden="true" />
                            <CardTitle className="text-xl">{hub.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground">{hub.description}</p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button asChild className="w-full">
                                <Link href={hub.href}>
                                    Open {hub.title}
                                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
      </div>
    </AppLayout>
  );
}
