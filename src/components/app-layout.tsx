'use client';

import { useEffect, useState } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/app-sidebar';
import AppHeader from '@/components/app-header';
import FormulaEditor from '@/components/formula-editor';
import GraphPlotter from '@/components/graph-plotter';
import type { CalculationHistoryItem } from '@/lib/types';

export default function AppLayout() {
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
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Sidebar>
          <AppSidebar />
        </Sidebar>
        <SidebarInset>
          <div className="flex h-screen flex-col">
            <AppHeader formula={formula} result={result} />
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
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
