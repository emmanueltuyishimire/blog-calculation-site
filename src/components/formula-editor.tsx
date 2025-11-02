'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Loader2, Save } from 'lucide-react';
import { suggestUnitConversions, type UnitConversionSuggestionsOutput } from '@/ai/flows/unit-conversion-suggestions';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import type { CalculationHistoryItem } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

const evaluateExpression = (expr: string): number | string => {
  if (!expr.trim()) return '...';
  try {
    const safeExpr = expr
      .replace(/\bpi\b/gi, 'Math.PI')
      .replace(/\be\b/gi, 'Math.E')
      .replace(/sqrt/g, 'Math.sqrt')
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/log/g, 'Math.log')
      .replace(/\^/g, '**');

    // Basic validation to prevent obvious malicious code
    if (/[a-zA-Z_]+[a-zA-Z0-9_]*\(/.test(safeExpr) && !/Math\.\w+\(/.test(safeExpr)) {
        if (!['sqrt(', 'sin(', 'cos(', 'tan(', 'log('].some(fn => safeExpr.includes(fn))) {
            return 'Invalid function';
        }
    }
    if (/[^0-9.+\-*/().,\s\w]/.test(safeExpr.replace(/Math\./g, ''))) {
      return 'Invalid characters';
    }

    const result = new Function('return ' + safeExpr)();
    
    if (typeof result !== 'number' || !isFinite(result)) {
      return "Invalid calculation";
    }

    return parseFloat(result.toFixed(10));
  } catch (error) {
    // This will catch undefined variables, syntax errors, etc.
    return '...';
  }
};


interface FormulaEditorProps {
  formula: string;
  setFormula: (formula: string) => void;
  setHistory: React.Dispatch<React.SetStateAction<CalculationHistoryItem[]>>;
  result: string | number | null;
  setResult: (result: string | number | null) => void;
}

export default function FormulaEditor({ formula, setFormula, setHistory, result, setResult }: FormulaEditorProps) {
  const [isSuggestingUnits, setIsSuggestingUnits] = useState(false);
  const [suggestions, setSuggestions] = useState<UnitConversionSuggestionsOutput['suggestions']>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    const calcResult = evaluateExpression(formula);
    setResult(calcResult);
  }, [formula, setResult]);

  const handleSaveToHistory = () => {
    if (typeof result !== 'number') {
      toast({
        variant: 'destructive',
        title: 'Cannot Save',
        description: 'Only valid calculations can be saved to history.',
      });
      return;
    }

    const newHistoryItem: CalculationHistoryItem = {
      id: new Date().toISOString(),
      formula,
      result: result,
      timestamp: Date.now(),
    };

    setHistory((prevHistory) => {
      const updatedHistory = [newHistoryItem, ...prevHistory.filter(item => item.formula !== formula)].slice(0, 50);
      try {
        localStorage.setItem('formulaHistory', JSON.stringify(updatedHistory));
        toast({ title: 'Saved!', description: 'Calculation saved to history.' });
      } catch (error) {
        console.error("Failed to save history to localStorage", error);
        toast({ variant: 'destructive', title: 'Error', description: 'Could not save to history.' });
      }
      return updatedHistory;
    });
  };

  const handleUnitConversion = async () => {
    if (!formula) {
      toast({
        variant: 'destructive',
        title: 'No Formula',
        description: 'Please enter a formula to get unit conversion suggestions.',
      });
      return;
    }
    setIsSuggestingUnits(true);
    setSuggestions([]);
    try {
      const res = await suggestUnitConversions({ formula });
      if (res && res.suggestions.length > 0) {
        setSuggestions(res.suggestions);
      } else {
        toast({
          title: 'No Suggestions',
          description: 'AI could not find any unit conversions for this formula.',
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get suggestions. Please try again.',
      });
    } finally {
      setIsSuggestingUnits(false);
    }
  };

  return (
    <Card className="flex w-full flex-col">
      <CardHeader>
        <CardTitle className="font-headline">Calculation Editor</CardTitle>
        <CardDescription>Enter a mathematical or scientific formula to see the result in real-time.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <Textarea
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="e.g., (10 * 2) + 5"
          className="min-h-[150px] font-mono text-lg"
          aria-label="Formula Input"
        />
        <div className="flex items-center justify-between rounded-lg bg-muted p-4">
            <span className="text-sm text-muted-foreground">Result:</span>
            <span className="text-2xl font-bold font-mono text-primary">{result}</span>
        </div>
        {suggestions.length > 0 && (
          <div className="space-y-4 pt-4">
            <Separator />
            <h3 className="text-lg font-semibold">Unit Conversion Suggestions</h3>
            <ScrollArea className="h-48 rounded-md border p-4">
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="grid grid-cols-[1fr_2fr] items-start gap-4">
                    <div className='flex flex-wrap items-center gap-x-2'>
                      <span className="font-bold font-mono">{suggestion.value}</span>
                      <span className="text-muted-foreground">{suggestion.unit}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {suggestion.suggestedUnits.map(unit => (
                        <Badge key={unit} variant="secondary" className="cursor-pointer hover:bg-primary/20">{unit}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-between border-t px-6 py-4">
        <Button onClick={handleUnitConversion} disabled={isSuggestingUnits} variant="ghost">
          {isSuggestingUnits ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Lightbulb className="mr-2 h-4 w-4" />
          )}
          Suggest Units
        </Button>
         <Button onClick={handleSaveToHistory} disabled={typeof result !== 'number'}>
            <Save className="mr-2 h-4 w-4" />
            Save to History
         </Button>
      </CardFooter>
    </Card>
  );
}
