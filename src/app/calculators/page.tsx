
'use client';

import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { mathsCalculatorCategories } from '@/lib/maths-calculators';
import { physicsCalculatorCategories } from '@/lib/physics-calculators';
import { GraduationCap, FlaskConical } from 'lucide-react';

export default function CalculatorsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight font-headline">All Calculators</h1>
            <p className="mt-2 text-muted-foreground">Explore our full suite of calculators, organized by category.</p>
        </div>

        <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <GraduationCap className="text-primary size-7" />
                    Maths Calculators
                </h2>
                {mathsCalculatorCategories.map((category) => (
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

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <FlaskConical className="text-primary size-7" />
                    Physics Calculators
                </h2>
                {physicsCalculatorCategories.map((category) => (
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
        </div>
      </div>
    </AppLayout>
  );
}
