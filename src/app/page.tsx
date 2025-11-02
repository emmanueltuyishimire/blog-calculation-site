'use client';

import AppLayout from '@/components/app-layout';
import FormulaEditor from '@/components/formula-editor';
import GraphPlotter from '@/components/graph-plotter';
import { useState, useEffect } from 'react';
import type { CalculationHistoryItem } from '@/lib/types';


export default function Home() {
    const [formula, setFormula] = useState('2 * (pi * 5^2) + 2 * pi * 5 * 10');
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