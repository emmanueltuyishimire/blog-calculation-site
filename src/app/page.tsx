'use client';

import AppLayout from '@/components/app-layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { hubs } from '@/lib/hubs';
import { ArrowRight } from 'lucide-react';

export default function Home() {

  return (
    <AppLayout>
      <section className="bg-background py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">
            Smarter Tools for Everyday Life
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore hundreds of free, accurate, and easy-to-use online tools — from finance and health to science, tech, and daily life.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/tools">
                Explore All Tools
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Read Guides
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            100% free • No sign-up • Built to save you time
          </p>
        </div>
      </section>

      <main className="flex-1 p-4 md:p-8">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Explore Our Hubs</h2>
                <p className="mt-2 text-muted-foreground">Specialized tools for all your calculation needs.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {hubs.slice(0, 6).map((hub) => {
                    const Icon = hub.icon;
                    return (
                        <Card key={hub.title} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <CardHeader className="flex-row items-center gap-4">
                                <Icon className="size-10 text-primary" />
                                <div>
                                    <CardTitle>{hub.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <CardDescription>{hub.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <a href={hub.href} target="_blank" rel="noopener noreferrer">
                                        Open Hub
                                        <ArrowRight className="ml-2 size-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
            <div className="text-center mt-12">
                <Button asChild variant="secondary" size="lg">
                    <Link href="/tools">
                        View All Hubs
                    </Link>
                </Button>
            </div>
        </div>
      </main>
    </AppLayout>
    );
}
