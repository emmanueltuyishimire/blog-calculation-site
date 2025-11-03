
import { Heart, Landmark, GraduationCap, Cpu, Scale, Briefcase, Calendar, FlaskConical, Dna, Beaker, type LucideIcon, Zap } from 'lucide-react';

type Hub = {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
};

export const hubs: Hub[] = [
    {
        title: 'Math Calculators Hub',
        description: 'A comprehensive collection of free online math calculators for algebra, geometry, statistics, and more.',
        href: '/maths',
        icon: GraduationCap,
    },
    {
        title: 'Finance & Investment',
        description: 'Manage money smarter with easy-to-use calculators for loans, savings, mortgages, taxes, and investments.',
        href: '/coming-soon',
        icon: Landmark,
    },
    {
        title: 'Health & Fitness',
        description: 'Track your body metrics and fitness goals effortlessly, from BMI and calorie intake to BMR and macro ratios.',
        href: '/coming-soon',
        icon: Heart,
    },
    {
        title: 'ICT & Tech Utilities',
        description: 'Handy tools for developers and network engineers, including bandwidth calculators and subnet finders.',
        href: '/coming-soon',
        icon: Cpu,
    },
    {
        title: 'Everyday Utilities',
        description: 'Get fast answers to daily questions — convert units, calculate time differences, measure areas, or check your GPA.',
        href: '/coming-soon',
        icon: Scale,
    },
    {
        title: 'Performance',
        description: 'Tools to analyze and improve your website\'s speed and performance.',
        href: '/performance',
        icon: Zap,
    },
    {
        title: 'Side Hustlers Calculators',
        description: 'Calculators and tools to help you manage your side hustles and freelance work.',
        href: '/coming-soon',
        icon: Briefcase,
    },
    {
        title: 'Age Calculators Hub',
        description: 'A collection of calculators for determining age and related time calculations.',
        href: '/coming-soon',
        icon: Calendar,
    },
    {
        title: 'Physics Calculators Hub',
        description: 'A collection of calculators for various physics formulas and equations.',
        href: '/coming-soon',
        icon: FlaskConical,
    },
    {
        title: 'Biology Calculators Hub',
        description: 'A collection of calculators for various biology formulas and equations.',
        href: '/coming-soon',
        icon: Dna,
    },
    {
        title: 'Chemistry Calculators Hub',
        description: 'A collection of calculators for various chemistry formulas and equations.',
        href: '/coming-soon',
        icon: Beaker,
    }
];
