
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
            { name: "Basic Calculator", href: "/basic" },
            { name: "Scientific Calculator", href: "/scientific" },
            { name: "Fraction Calculator", href: "/fraction" },
            { name: "Percentage Calculator", href: "/percentage" },
            { name: "Exponent Calculator", href: "/exponent" },
            { name: "Logarithm Calculator", href: "/log" },
            { name: "Root Calculator", href: "/root" },
            { name: "Rounding Calculator", href: "/rounding" },
            { name: "Factor Calculator", href: "/factor" },
            { name: "GCF Calculator", href: "/gcf" },
            { name: "LCM Calculator", href: "/lcm" },
            { name: "Binary Calculator", href: "/binary" },
            { name: "Hexadecimal Calculator", href: "/hex" },
            { name: "Big Number Calculator", href: "/big-number" },
        ]
    },
    {
        name: "Geometry & Trigonometry Calculators",
        description: "Calculate properties of shapes, distances, and angles.",
        icon: Shapes,
        calculators: [
            { name: "Geometry Calculator", href: "/geometry" },
            { name: "Pythagorean Theorem Calculator", href: "/pythagorean" },
            { name: "Right Triangle Calculator", href: "/right-triangle" },
            { name: "Slope Calculator", href: "/slope" },
            { name: "Distance Calculator", href: "/distance" },
            { name: "Area Calculator", href: "/geometry/area" },
            { name: "Volume Calculator", href: "/geometry/volume" },
            { name: "Surface Area Calculator", href: "/geometry/surface-area" },
            { name: "Circle Calculator", href: "/geometry/circle" },
        ]
    },
    {
        name: "Statistics & Probability Calculators",
        description: "Tools for data analysis, probability, and statistical calculations.",
        icon: BarChart,
        calculators: [
            { name: "Statistics Calculator", href: "/statistics" },
            { name: "Mean, Median, Mode Calculator", href: "/statistics/mean-median-mode" },
            { name: "Standard Deviation Calculator", href: "/statistics/standard-deviation" },
            { name: "Sample Size Calculator", href: "/statistics/sample-size" },
            { name: "Probability Calculator", href: "/statistics/probability" },
            { name: "Permutation & Combination Calculator", href: "/statistics/permutation-combination" },
            { name: "Z-Score Calculator", href: "/statistics/z-score" },
            { name: "Confidence Interval Calculator", href: "/statistics/confidence-interval" },
            { name: "Sequence Calculator", href: "/statistics/sequences" },
            { name: "Random Number Generator", href: "/random" },
        ]
    },
    {
        name: "Advanced & Specialty Calculators",
        description: "Calculators for advanced mathematics, matrices, and other specialized fields.",
        icon: Brain,
        calculators: [
            { name: "Calculus Calculator", href: "/calculus" },
            { name: "Matrix Calculator", href: "/matrix/calculator" },
            { name: "RREF Calculator", href: "/rref" },
            { name: "Desmos Matrix Calculator", href: "/desmos-matrix" },
            { name: "Diagonalize Matrix Calculator", href: "/diagonalize-matrix" },
            { name: "Half-Life Calculator", href: "/half-life" },
            { name: "Percent Error Calculator", href: "/percent-error" },
            { name: "Ratio Calculator", href: "/ratio" },
            { name: "Destiny Matrix Calculator", href: "/destiny-matrix" },
            { name: "Unit Converter", href: "/unit-converter" },
        ]
    }
];
