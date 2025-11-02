'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookMarked, History as HistoryIcon, Sigma } from 'lucide-react';
import { formulaLibrary } from '@/lib/formulas';
import type { CalculationHistoryItem } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { SidebarHeader, SidebarContent as SidebarBody, SidebarFooter } from '@/components/ui/sidebar';

interface AppSidebarProps {
  setFormula: (formula: string) => void;
  history: CalculationHistoryItem[];
  setHistory: React.Dispatch<React.SetStateAction<CalculationHistoryItem[]>>;
}

export default function AppSidebar({ setFormula, history, setHistory }: AppSidebarProps) {
  const handleSelectFormula = (expression: string) => {
    setFormula(expression);
  };

  const handleSelectHistory = (item: CalculationHistoryItem) => {
    setFormula(item.formula);
  };

  const handleClearHistory = () => {
    try {
      localStorage.removeItem('formulaHistory');
      setHistory([]);
    } catch (error) {
      console.error('Failed to clear history from localStorage', error);
    }
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <Sigma className="size-8 text-primary" />
          <h2 className="text-xl font-bold font-headline">Formula First</h2>
        </div>
      </SidebarHeader>
      <SidebarBody className="p-0">
        <Tabs defaultValue="library" className="flex h-full flex-col">
          <TabsList className="mx-2 grid w-auto grid-cols-2">
            <TabsTrigger value="library"><BookMarked className="mr-2 h-4 w-4" /> Library</TabsTrigger>
            <TabsTrigger value="history"><HistoryIcon className="mr-2 h-4 w-4" /> History</TabsTrigger>
          </TabsList>
          <TabsContent value="library" className="mt-0 flex-1 overflow-hidden">
            <ScrollArea className="h-full p-2">
              <div className="p-4 text-center text-sm text-sidebar-foreground/70">
                No formulas in library.
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="history" className="mt-0 flex-1 overflow-hidden">
             <ScrollArea className="h-full p-2">
              <div className="p-4 text-center text-sm text-sidebar-foreground/70">
                No calculations yet.
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </SidebarBody>
      <SidebarFooter>
        
      </SidebarFooter>
    </>
  );
}
