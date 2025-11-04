
import { Orbit, Zap, Thermometer, Waves } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

type CalculatorLink = {
    name: string;
    href: string;
};

type PhysicsCategory = {
    name: string;
    description: string;
    icon: LucideIcon;
    calculators: CalculatorLink[];
};

export const physicsCalculatorCategories: PhysicsCategory[] = [
    {
        name: "Mechanics",
        description: "Tools for motion, force, energy, and momentum.",
        icon: Orbit,
        calculators: [
            { name: "Velocity Calculator", href: "/coming-soon" },
            { name: "Acceleration Calculator", href: "/coming-soon" },
            { name: "Force (Newton's 2nd Law)", href: "/coming-soon" },
            { name: "Kinetic Energy Calculator", href: "/coming-soon" },
            { name: "Potential Energy Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Electromagnetism",
        description: "Calculate properties of electric and magnetic fields.",
        icon: Zap,
        calculators: [
            { name: "Ohm's Law Calculator", href: "/coming-soon" },
            { name: "Coulomb's Law Calculator", href: "/coming-soon" },
            { name: "Electric Field Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Thermodynamics",
        description: "Tools related to heat, temperature, and energy transfer.",
        icon: Thermometer,
        calculators: [
            { name: "Celsius to Fahrenheit", href: "/coming-soon" },
            { name: "Ideal Gas Law Calculator", href: "/coming-soon" },
        ]
    },
    {
        name: "Waves & Optics",
        description: "Calculators for wave properties and light behavior.",
        icon: Waves,
        calculators: [
            { name: "Wave Speed Calculator", href: "/coming-soon" },
            { name: "Snell's Law Calculator", href: "/coming-soon" },
        ]
    }
];
