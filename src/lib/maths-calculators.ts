
import { Brain, Sigma, Pi, FunctionSquare, Variable, Shapes, Percent, BarChart, BookOpen, Calculator as CalculatorIcon } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

type CalculatorLink = {
    name: string;
    href: string;
};

type MathsCategory = {
    name: string;
    description: string;
    icon: LucideIcon;
    calculators: CalculatorLink[];
};

export const mathsCalculatorCategories: MathsCategory[] = [
    {
        name: "Basic & Algebra Calculators",
        description: "Tools for fundamental arithmetic, algebraic equations, and number theory.",
        icon: CalculatorIcon,
        calculators: [
            { name: "Algebra Calculator", href: "https://www.maths.calculation.site/algebra" },
            { name: "Basic Calculator", href: "https://www.maths.calculation.site/basic" },
            { name: "Scientific Calculator", href: "https://www.maths.calculation.site/scientific" },
            { name: "Fraction Calculator", href: "https://www.maths.calculation.site/fraction" },
            { name: "Percentage Calculator", href: "https://www.maths.calculation.site/percentage" },
            { name: "Exponent Calculator", href: "https://www.maths.calculation.site/exponent" },
            { name: "Logarithm Calculator", href: "https://www.maths.calculation.site/log" },
            { name: "Root Calculator", href: "https://www.maths.calculation.site/root" },
            { name: "Rounding Calculator", href: "https://www.maths.calculation.site/rounding" },
            { name: "Factor Calculator", href: "https://www.maths.calculation.site/factor" },
            { name: "GCF Calculator", href: "https://www.maths.calculation.site/gcf" },
            { name: "LCM Calculator", href: "https://www.maths.calculation.site/lcm" },
            { name: "Binary Calculator", href: "https://www.maths.calculation.site/binary" },
            { name: "Hexadecimal Calculator", href: "https://www.maths.calculation.site/hex" },
            { name: "Big Number Calculator", href: "https://www.maths.calculation.site/big-number" },
        ]
    },
    {
        name: "Geometry & Trigonometry Calculators",
        description: "Calculate properties of shapes, distances, and angles.",
        icon: Shapes,
        calculators: [
            { name: "Geometry Calculator", href: "https://www.maths.calculation.site/geometry" },
            { name: "Pythagorean Theorem Calculator", href: "https://www.maths.calculation.site/pythagorean" },
            { name: "Right Triangle Calculator", href: "https://www.maths.calculation.site/right-triangle" },
            { name: "Slope Calculator", href: "https://www.maths.calculation.site/slope" },
            { name: "Distance Calculator", href: "https://www.maths.calculation.site/distance" },
            { name: "Area Calculator", href: "https://www.maths.calculation.site/geometry/area" },
            { name: "Volume Calculator", href: "https://www.maths.calculation.site/geometry/volume" },
            { name: "Surface Area Calculator", href: "https://www.maths.calculation.site/geometry/surface-area" },
            { name: "Circle Calculator", href: "https://www.maths.calculation.site/geometry/circle" },
        ]
    },
    {
        name: "Statistics & Probability Calculators",
        description: "Tools for data analysis, probability, and statistical calculations.",
        icon: BarChart,
        calculators: [
            { name: "Statistics Calculator", href: "https://www.maths.calculation.site/statistics" },
            { name: "Mean, Median, Mode Calculator", href: "https://www.maths.calculation.site/statistics/mean-median-mode" },
            { name: "Standard Deviation Calculator", href: "https://www.maths.calculation.site/statistics/standard-deviation" },
            { name: "Sample Size Calculator", href: "https://www.maths.calculation.site/statistics/sample-size" },
            { name: "Probability Calculator", href: "https://www.maths.calculation.site/statistics/probability" },
            { name: "Permutation & Combination Calculator", href: "https://www.maths.calculation.site/statistics/permutation-combination" },
            { name: "Z-Score Calculator", href: "https://www.maths.calculation.site/statistics/z-score" },
            { name: "Confidence Interval Calculator", href: "https://www.maths.calculation.site/statistics/confidence-interval" },
            { name: "Sequence Calculator", href: "https://www.maths.calculation.site/statistics/sequences" },
            { name: "Random Number Generator", href: "https://www.maths.calculation.site/random" },
        ]
    },
    {
        name: "Advanced & Specialty Calculators",
        description: "Calculators for advanced mathematics, matrices, and other specialized fields.",
        icon: Brain,
        calculators: [
            { name: "Calculus Calculator", href: "https://www.maths.calculation.site/calculus" },
            { name: "Matrix Calculator", href: "https://www.maths.calculation.site/matrix" },
            { name: "RREF Calculator", href: "https://www.maths.calculation.site/rref" },
            { name: "Desmos Matrix Calculator", href: "https://www.maths.calculation.site/desmos-matrix" },
            { name: "Diagonalize Matrix Calculator", href: "https://www.maths.calculation.site/diagonalize-matrix" },
            { name: "Half-Life Calculator", href: "https://www.maths.calculation.site/half-life" },
            { name: "Percent Error Calculator", href: "https://www.maths.calculation.site/percent-error" },
            { name: "Ratio Calculator", href: "https://www.maths.calculation.site/ratio" },
            { name: "Destiny Matrix Calculator", href: "https://www.maths.calculation.site/destiny-matrix" },
            { name: "Unit Converter", href: "https://www.maths.calculation.site/unit-converter" },
        ]
    }
];

