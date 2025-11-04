
'use client';

import { useEffect, useState } from 'react';
import AppLayout from '@/components/app-layout';
import FormulaEditor from '@/components/formula-editor';
import FormulaLibrary from '@/components/formula-library';
import CalculationHistory from '@/components/calculation-history';
import type { CalculationHistoryItem } from '@/lib/types';
import GraphPlotter from '@/components/graph-plotter';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function SmartCalculatorPage() {
  const [formula, setFormula] = useState<string>('P * (1 + r * t)');
  const [result, setResult] = useState<string | number | null>(null);
  const [history, setHistory] = useState<CalculationHistoryItem[]>([]);

  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('formulaHistory');
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error("Failed to load history from localStorage", error);
    }
  }, []);
  
  return (
    <AppLayout>
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
            <ResizablePanel defaultSize={20} minSize={15} className="min-w-[250px]">
                <FormulaLibrary setFormula={setFormula} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={55} minSize={40}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={60} minSize={40}>
                        <FormulaEditor 
                            formula={formula}
                            setFormula={setFormula}
                            setHistory={setHistory}
                            result={result}
                            setResult={setResult}
                        />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={40} minSize={25}>
                       <GraphPlotter formula={formula} />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25} minSize={20} className="min-w-[300px]">
                <CalculationHistory history={history} setHistory={setHistory} setFormula={setFormula} />
            </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </AppLayout>
  );
}
