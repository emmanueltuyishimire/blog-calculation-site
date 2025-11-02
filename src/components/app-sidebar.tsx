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
              <Accordion type="multiple" className="w-full" defaultValue={[formulaLibrary[0].name]}>
                {formulaLibrary.map((category) => (
                  <AccordionItem value={category.name} key={category.name}>
                    <AccordionTrigger className="px-2 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <category.icon className="size-5 text-muted-foreground" />
                        <span className="font-semibold">{category.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <ul className="space-y-1">
                        {category.formulas.map((formula) => (
                          <li key={formula.name}>
                            <button
                              onClick={() => handleSelectFormula(formula.expression)}
                              className="w-full rounded-md p-2 text-left hover:bg-sidebar-accent"
                            >
                              <p className="font-medium">{formula.name}</p>
                              <p className="text-xs text-sidebar-foreground/70">{formula.description}</p>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="history" className="mt-0 flex-1 overflow-hidden">
             <ScrollArea className="h-full p-2">
              {history.length > 0 ? (
                <ul className="space-y-1">
                  {history.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleSelectHistory(item)}
                        className="w-full rounded-md p-2 text-left hover:bg-sidebar-accent"
                      >
                        <p className="font-mono text-sm truncate">{item.formula}</p>
                        <p className="text-xs text-sidebar-foreground/70">
                          {formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-sm text-sidebar-foreground/70">
                  No calculations yet.
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </SidebarBody>
      <SidebarFooter>
        {history.length > 0 && (
          <Tabs defaultValue="library" className="w-full">
            <TabsContent value="history">
              <Button variant="ghost" onClick={handleClearHistory} className="w-full">
                Clear History
              </Button>
            </TabsContent>
          </Tabs>
        )}
      </SidebarFooter>
    </>
  );
}
