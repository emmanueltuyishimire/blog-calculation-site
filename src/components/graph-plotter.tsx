'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useMemo } from 'react';
import { LineChart as LineChartIcon } from 'lucide-react';

interface GraphPlotterProps {
  formula: string;
}

const generatePlotData = (formula: string) => {
  const data = [];
  const expression = formula.split('=').pop()?.trim() || '';
  if (!expression || !expression.includes('x')) {
    return [];
  }

  try {
    const safeExpression = expression
      .replace(/\bpi\b/gi, 'Math.PI')
      .replace(/\be\b/gi, 'Math.E')
      .replace(/sqrt/g, 'Math.sqrt')
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/log/g, 'Math.log')
      .replace(/\^/g, '**');

    const plotFunction = new Function('x', `
        const Math = {
            PI: ${Math.PI},
            E: ${Math.E},
            sqrt: ${Math.sqrt},
            sin: ${Math.sin},
            cos: ${Math.cos},
            tan: ${Math.tan},
            log: ${Math.log},
            abs: ${Math.abs},
            round: ${Math.round},
            ceil: ${Math.ceil},
            floor: ${Math.floor},
            random: ${Math.random}
        };
        return ${safeExpression}
    `);

    for (let i = -10; i <= 10; i += 0.5) {
      const x = parseFloat(i.toFixed(2));
      const y = plotFunction(x);
      if (isFinite(y)) {
        data.push({ x, y: parseFloat(y.toFixed(4)) });
      }
    }
    return data;
  } catch (error) {
    return [];
  }
};

const chartConfig = {
  y: {
    label: 'Value (y)',
    color: 'hsl(var(--primary))',
  },
};

export default function GraphPlotter({ formula }: GraphPlotterProps) {
  const plotData = useMemo(() => generatePlotData(formula), [formula]);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <LineChartIcon className="text-primary" aria-hidden="true" />
            Graph Plotter
        </CardTitle>
        <CardDescription>Visualize your formula. Enter an equation in terms of 'x' (e.g., y = 2*x + sin(x)).</CardDescription>
      </CardHeader>
      <CardContent className="h-[calc(100%-7.5rem)]">
        {plotData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={plotData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }} aria-label="Graph of the formula">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="x" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                cursor={{stroke: 'hsl(var(--accent))', strokeWidth: 1, strokeDasharray: '3 3'}}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Line type="monotone" dataKey="y" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} aria-label="Formula line" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg bg-muted/50">
            <p className="max-w-xs text-center text-sm text-muted-foreground">
              Enter a plottable formula with 'x' to generate a graph.
              <br/>
              For example: <code className="font-mono text-primary">y = x^2</code>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
