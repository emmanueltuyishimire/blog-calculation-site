'use client';

import { useState, useEffect } from 'react';
import AppLayout from '@/components/app-layout';
import FormulaEditor from '@/components/formula-editor';
import FormulaLibrary from '@/components/formula-library';
import CalculationHistory from '@/components/calculation-history';
import GraphPlotter from '@/components/graph-plotter';
import type { CalculationHistoryItem } from '@/lib/types';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function CalculatorsPage() {
  const [formula, setFormula] = useState('');
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
          <ResizablePanel defaultSize={25} minSize={20} className="min-w-[250px]">
            <div className="flex h-full flex-col p-4 gap-4">
               <FormulaLibrary setFormula={setFormula} />
               <CalculationHistory history={history} setHistory={setHistory} setFormula={setFormula} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={50} minSize={30}>
                <div className="p-4 h-full">
                    <FormulaEditor 
                        formula={formula} 
                        setFormula={setFormula}
                        result={result}
                        setResult={setResult}
                        setHistory={setHistory}
                    />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50} minSize={30}>
                <div className="p-4 h-full">
                    <GraphPlotter formula={formula} />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </AppLayout>
  );
}
