'use client';

import AppLayout from '@/components/app-layout';
import FormulaEditor from '@/components/formula-editor';
import GraphPlotter from '@/components/graph-plotter';
import { useState, useEffect } from 'react';
import type { CalculationHistoryItem } from '@/lib/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
    const [formula, setFormula] = useState('y = x^2');
    const [result, setResult] = useState<string | number | null>(null);
    const [history, setHistory] = useState<CalculationHistoryItem[]>([]);

    useEffect(() => {
        try {
        const savedHistory = localStorage.getItem('formulaHistory');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
        } catch (error) {
        console.error('Failed to load history from localStorage', error);
        }
    }, []);

  return (
    <AppLayout>
      <section className="bg-background py-12 md:py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">
            Smarter Calculations for Everyday Life
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore hundreds of free, accurate, and easy-to-use online calculators — from finance and health to science, tech, and daily life tools.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/tools">
                Explore Tools
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Read Guides
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            100% free • No sign-up • Built to save your time
          </p>
        </div>
      </section>
        <main className="flex flex-1 flex-col gap-4 overflow-auto p-4 lg:flex-row lg:gap-6 lg:p-6">
            <div className="flex flex-1 items-start">
            <FormulaEditor
                formula={formula}
                setFormula={setFormula}
                setHistory={setHistory}
                result={result}
                setResult={setResult}
            />
            </div>
            <div className="w-full lg:w-full lg:max-w-md xl:max-w-lg">
            <GraphPlotter formula={formula} />
            </div>
        </main>
    </AppLayout>
    );
}
