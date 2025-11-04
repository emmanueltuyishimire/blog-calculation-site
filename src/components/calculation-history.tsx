'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { CalculationHistoryItem } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/components/ui/button';
import { History, Trash2, Clipboard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CalculationHistoryProps {
  history: CalculationHistoryItem[];
  setHistory: React.Dispatch<React.SetStateAction<CalculationHistoryItem[]>>;
  setFormula: (formula: string) => void;
}

export default function CalculationHistory({ history, setHistory, setFormula }: CalculationHistoryProps) {
  const { toast } = useToast();

  const handleClearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem('formulaHistory');
      toast({ title: 'History Cleared' });
    } catch (error) {
      console.error("Failed to clear history from localStorage", error);
      toast({ variant: 'destructive', title: 'Error', description: 'Could not clear history.' });
    }
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copied!', description: 'Result copied to clipboard.' });
  };
  
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader className="flex-row items-center justify-between">
        <div className='space-y-1.5'>
            <CardTitle className="font-headline flex items-center gap-2">
                <History className="text-primary" aria-hidden="true" />
                History
            </CardTitle>
            <CardDescription>Your recent calculations.</CardDescription>
        </div>
        {history.length > 0 && (
          <Button variant="ghost" size="icon" onClick={handleClearHistory} aria-label="Clear History">
            <Trash2 className="h-5 w-5 text-muted-foreground" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
            {history.length === 0 ? (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    <p>No calculations saved yet.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {history.map((item) => (
                        <div key={item.id} className="group relative">
                            <button 
                                className="w-full text-left p-2 rounded-md hover:bg-muted"
                                onClick={() => setFormula(item.formula)}
                                aria-label={`Use formula: ${item.formula}`}
                            >
                                <p className="text-sm font-mono truncate" title={item.formula}>{item.formula}</p>
                                <p className="text-xs text-muted-foreground">
                                    <span className="font-bold text-primary">{item.result}</span> - {' '}
                                    {formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })}
                                </p>
                            </button>
                            <Button 
                                variant="ghost"
                                size="icon"
                                className="absolute top-1/2 right-1 -translate-y-1/2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handleCopyToClipboard(String(item.result))}
                                aria-label={`Copy result ${item.result} to clipboard`}
                            >
                                <Clipboard className="h-4 w-4"/>
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
