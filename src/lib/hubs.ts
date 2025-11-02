import { Calculator, Heart, Cpu, Landmark, Scale, Briefcase, Calendar, FlaskConical, Dna, Beaker, type LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

type Hub = {
    title: string;
    description: string;
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export const hubs: Hub[] = [
    {
        title: 'Mathematics Calculators',
        description: 'A collection of calculators for various mathematical functions and formulas.',
        href: 'https://maths.calculation.site',
        icon: Calculator,
    },
    {
        title: 'Health & Fitness Calculators',
        description: 'A collection of calculators for tracking your health and fitness goals.',
        href: 'https://health.calculation.site',
        icon: Heart,
    },
    {
        title: 'ICT Tools Hub',
        description: 'A collection of tools for developers, IT experts, and tech enthusiasts.',
        href: 'https://ict.health.calculation.site',
        icon: Cpu,
    },
    {
        title: 'Finance Calculators Hub',
        description: 'A collection of tools for budgeting, investing, and financial planning.',
        href: 'https://finance.health.calculation.site',
        icon: Landmark,
    },
    {
        title: 'Unit Converter Hub',
        description: 'A collection of tools for converting units of measurement.',
        href: 'https://unit.health.calculation.site',
        icon: Scale,
    },
    {
        title: 'Side Hustlers Calculators',
        description: 'Calculators and tools to help you manage your side hustles and freelance work.',
        href: 'https://hustle.health.calculation.site',
        icon: Briefcase,
    },
    {
        title: 'Age Calculators Hub',
        description: 'A collection of calculators for determining age and related time calculations.',
        href: 'https://age.health.calculation.site',
        icon: Calendar,
    },
    {
        title: 'Physics Calculators Hub',
        description: 'A collection of calculators for various physics formulas and equations.',
        href: 'https://physics.health.calculation.site',
        icon: FlaskConical,
    },
    {
        title: 'Biology Calculators Hub',
        description: 'A collection of calculators for various biology formulas and equations.',
        href: 'https://biology.health.calculation.site',
        icon: Dna,
    },
    {
        title: 'Chemistry Calculators Hub',
        description: 'A collection of calculators for various chemistry formulas and equations.',
        href: 'https://chemistry.health.calculation.site',
        icon: Beaker,
    }
];
