
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
        name: "General Math",
        description: "Calculators for everyday math problems, including fractions, percentages, and rounding.",
        icon: CalculatorIcon,
        calculators: [
            { name: "Basic Calculator", href: "/coming-soon" },
            { name: "Fraction Calculator", href: "/coming-soon" },
            { name: "Percentage Calculator", href: "/coming-soon" },
            { name: "Rounding Calculator", href: "/coming-soon" },
            { name: "Ratio Calculator", href: "/coming-soon" },
            { name: "Random Number Generator", href: "/coming-soon" },
            { name: "Scientific Notation", href: "/coming-soon" },
            { name: "Big Number Calculator", href: "/coming-soon" },
            { name: "Unit Converter", href: "/coming-soon" },
        ]
    },
    {
        name: "Algebra",
        description: "Solve algebraic equations, work with exponents, and find factors.",
        icon: Variable,
        calculators: [
            { name: "Algebra Calculator", href: "/coming-soon" },
            { name: "Exponent Calculator", href: "/coming-soon" },
            { name: "Log Calculator", href: "/coming-soon" },
            { name: "Factor Calculator", href: "/coming-soon" },
            { name: "GCF Calculator", href: "/coming-soon" },
            { name: "LCM Calculator", href: "/coming-soon" },
            { name: "Root Calculator", href: "/coming-soon" },
            { name: "Slope Calculator", href: "/coming-soon" },
            { name: "Pythagorean Theorem", href: "/coming-soon" },
            { name: "Distance Formula", href: "/coming-soon" },
        ]
    },
    {
        name: "Geometry",
        description: "Calculate area, volume, surface area, and properties of shapes.",
        icon: Shapes,
        calculators: [
            { name: "Geometry Calculator", href: "/coming-soon" },
            { name: "Area Calculator", href: "/coming-soon" },
            { name: "Circle Calculator", href: "/coming-soon" },
            { name: "Surface Area Calculator", href: "/coming-soon" },
            { name: "Volume Calculator", href: "/coming-soon" },
            { name: "Right Triangle Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Statistics",
        description: "Tools for statistical analysis, including probability, standard deviation, and more.",
        icon: BarChart,
        calculators: [
            { name: "Statistics Calculator", href: "/coming-soon" },
            { name: "Mean, Median, Mode", href: "/coming-soon" },
            { name: "Standard Deviation", href: "/coming-soon" },
            { name: "Probability Calculator", href: "/coming-soon" },
            { name: "Permutation & Combination", href: "/coming-soon" },
            { name: "Confidence Interval", href: "/coming-soon" },
            { name: "Sample Size Calculator", href: "/coming-soon" },
            { name: "Z-Score Calculator", href: "/coming-soon" },
            { name: "Sequences Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Calculus & Analysis",
        description: "Calculators for derivatives, integrals, and other calculus concepts.",
        icon: FunctionSquare,
        calculators: [
            { name: "Calculus Calculator", href: "/coming-soon" },
            { name: "Trigonometry Calculator", href: "/coming-soon" },
            { name: "Half-Life Calculator", href: "/coming-soon" },
            { name: "Percent Error Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Matrix",
        description: "Perform matrix operations like addition, multiplication, and diagonalization.",
        icon: Pi,
        calculators: [
            { name: "Matrix Calculator", href: "/coming-soon" },
            { name: "RREF Calculator", href: "/coming-soon" },
            { name: "Diagonalize Matrix", href: "/coming-soon" },
        ]
    },
    {
        name: "Number Systems",
        description: "Convert between binary, hexadecimal, and decimal number systems.",
        icon: Sigma,
        calculators: [
            { name: "Binary Calculator", href: "/coming-soon" },
            { name: "Hex Calculator", href: "/coming-soon" },
        ]
    }
];
