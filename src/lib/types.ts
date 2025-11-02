import type { LucideIcon } from 'lucide-react';

export interface Formula {
  name: string;
  expression: string;
  description: string;
}

export interface FormulaCategory {
  name: string;
  icon: LucideIcon;
  formulas: Formula[];
}

export interface CalculationHistoryItem {
  id: string;
  formula: string;
  result: string | number;
  timestamp: number;
}
