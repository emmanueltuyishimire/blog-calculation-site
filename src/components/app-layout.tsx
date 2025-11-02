'use client';

import { useEffect, useState } from 'react';
import AppHeader from '@/components/app-header';
import type { CalculationHistoryItem } from '@/lib/types';

export default function AppLayout({ children }: { children: React.ReactNode }) {
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
    <div className="flex h-screen min-h-screen flex-col bg-background">
      <AppHeader formula={formula} result={result} />
      {children}
    </div>
  );
}