
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
            { name: "Smart Calculator", href: "/calculators" },
            { name: "Basic Calculator", href: "/coming-soon" },
            { name: "Scientific Calculator", href: "/coming-soon" },
            { name: "Fraction Calculator", href: "/coming-soon" },
            { name: "Percentage Calculator", href: "/coming-soon" },
            { name: "Exponent Calculator", href: "/coming-soon" },
            { name: "Logarithm Calculator", href: "/coming-soon" },
            { name: "Root Calculator", href: "/coming-soon" },
            { name: "Rounding Calculator", href: "/coming-soon" },
            { name: "Factor Calculator", href: "/coming-soon" },
            { name: "GCF Calculator", href: "/coming-soon" },
            { name: "LCM Calculator", href: "/coming-soon" },
            { name: "Binary Calculator", href: "/coming-soon" },
            { name: "Hexadecimal Calculator", href: "/coming-soon" },
            { name: "Big Number Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Geometry & Trigonometry Calculators",
        description: "Calculate properties of shapes, distances, and angles.",
        icon: Shapes,
        calculators: [
            { name: "Geometry Calculator", href: "/coming-soon" },
            { name: "Pythagorean Theorem Calculator", href: "/coming-soon" },
            { name: "Right Triangle Calculator", href: "/coming-soon" },
            { name: "Slope Calculator", href: "/coming-soon" },
            { name: "Distance Calculator", href: "/coming-soon" },
            { name: "Area Calculator", href: "/coming-soon" },
            { name: "Volume Calculator", href: "/coming-soon" },
            { name: "Surface Area Calculator", href: "/coming-soon" },
            { name: "Circle Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Statistics & Probability Calculators",
        description: "Tools for data analysis, probability, and statistical calculations.",
        icon: BarChart,
        calculators: [
            { name: "Statistics Calculator", href: "/coming-soon" },
            { name: "Mean, Median, Mode Calculator", href: "/coming-soon" },
            { name: "Standard Deviation Calculator", href: "/coming-soon" },
            { name: "Sample Size Calculator", href: "/coming-soon" },
            { name: "Probability Calculator", href: "/coming-soon" },
            { name: "Permutation & Combination Calculator", href: "/coming-soon" },
            { name: "Z-Score Calculator", href: "/coming-soon" },
            { name: "Confidence Interval Calculator", href: "/coming-soon" },
            { name: "Sequence Calculator", href: "/coming-soon" },
            { name: "Random Number Generator", href: "/coming-soon" },
        ]
    },
    {
        name: "Advanced & Specialty Calculators",
        description: "Calculators for advanced mathematics, matrices, and other specialized fields.",
        icon: Brain,
        calculators: [
            { name: "Calculus Calculator", href: "/coming-soon" },
            { name: "Matrix Calculator", href: "/coming-soon" },
            { name: "RREF Calculator", href: "/coming-soon" },
            { name: "Desmos Matrix Calculator", href: "/coming-soon" },
            { name: "Diagonalize Matrix Calculator", href: "/coming-soon" },
            { name: "Half-Life Calculator", href: "/coming-soon" },
            { name: "Percent Error Calculator", href: "/coming-soon" },
            { name: "Ratio Calculator", href: "/coming-soon" },
            { name: "Destiny Matrix Calculator", href: "/coming-soon" },
            { name: "Unit Converter", href: "/coming-soon" },
        ]
    }
];
