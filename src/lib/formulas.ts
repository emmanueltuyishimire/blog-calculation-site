import { Calculator, FlaskConical, Landmark } from 'lucide-react';
import type { FormulaCategory } from '@/lib/types';

export const formulaLibrary: FormulaCategory[] = [
  {
    name: 'Mathematics',
    icon: Calculator,
    formulas: [
      {
        name: 'Area of a Circle',
        expression: 'pi * r^2',
        description: 'Calculates the area of a circle given its radius.',
      },
      {
        name: 'Pythagorean Theorem',
        expression: 'sqrt(a^2 + b^2)',
        description: 'Finds the hypotenuse of a right triangle.',
      },
      {
        name: 'Quadratic Formula',
        expression: '(-b + sqrt(b^2 - 4*a*c)) / (2*a)',
        description: 'Solves for x in a quadratic equation.',
      },
    ],
  },
  {
    name: 'Physics',
    icon: FlaskConical,
    formulas: [
      {
        name: "Ohm's Law",
        expression: 'V = I * R',
        description: 'Relates voltage, current, and resistance.',
      },
      {
        name: "Einstein's Mass-Energy Equivalence",
        expression: 'E = m * c^2',
        description: 'Energy equals mass times the speed of light squared.',
      },
      {
        name: 'Kinetic Energy',
        expression: '0.5 * m * v^2',
        description: 'Calculates the kinetic energy of an object.',
      },
    ],
  },
  {
    name: 'Finance',
    icon: Landmark,
    formulas: [
      {
        name: 'Simple Interest',
        expression: 'P * (1 + r * t)',
        description: 'Calculates the future value with simple interest.',
      },
      {
        name: 'Compound Interest',
        expression: 'P * (1 + r/n)^(n*t)',
        description: 'Calculates future value with compound interest.',
      },
      {
        name: 'Rule of 72',
        expression: '72 / r',
        description: 'Estimates years to double an investment.',
      },
    ],
  },
];
