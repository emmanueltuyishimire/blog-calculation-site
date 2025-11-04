'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formulaLibrary } from '@/lib/formulas';
import { BookOpen, Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { smartFormulaSearch } from '@/ai/flows/smart-formula-search';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface FormulaLibraryProps {
  setFormula: (formula: string) => void;
}

export default function FormulaLibrary({ setFormula }: FormulaLibraryProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const { toast } = useToast();

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }
        setIsSearching(true);
        try {
            const result = await smartFormulaSearch({ query: searchQuery });
            setSearchResults(result.formulas);
            if (result.formulas.length === 0) {
                toast({
                    title: 'No formulas found',
                    description: 'Try a different search query.',
                });
            }
        } catch (error) {
            console.error('Smart search failed:', error);
            toast({
                variant: 'destructive',
                title: 'Search Error',
                description: 'Could not perform smart search.',
            });
        } finally {
            setIsSearching(false);
        }
    };
    
    const displayedCategories = formulaLibrary.filter(category => {
        if (searchResults.length > 0) {
            return category.formulas.some(formula => searchResults.includes(formula.name));
        }
        return true;
    });

  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <BookOpen className="text-primary" aria-hidden="true" />
          Formula Library
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex gap-2">
            <Input 
                placeholder="Describe a calculation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                aria-label="Search for a formula"
            />
            <Button onClick={handleSearch} disabled={isSearching} size="icon" aria-label="Perform search">
                {isSearching ? <Loader2 className="animate-spin"/> : <Search />}
            </Button>
        </div>

        <Accordion type="multiple" className="w-full flex-1 overflow-y-auto">
          {displayedCategories.map((category) => (
            <AccordionItem key={category.name} value={category.name}>
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary/80" aria-hidden="true" />
                  {category.name}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1">
                  {category.formulas.filter(formula => searchResults.length === 0 || searchResults.includes(formula.name)).map((formula) => (
                    <button
                      key={formula.name}
                      onClick={() => setFormula(formula.expression)}
                      className="p-2 text-left hover:bg-accent rounded-md transition-colors text-sm"
                      title={formula.description}
                      aria-label={`Use formula: ${formula.name}`}
                    >
                      {formula.name}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
