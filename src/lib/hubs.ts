
import { Heart, Landmark, GraduationCap, Cpu, Scale, Briefcase, Calendar, FlaskConical, Dna, Beaker, type LucideIcon } from 'lucide-react';

type Hub = {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
};

export const hubs: Hub[] = [
    {
        title: 'Finance & Investment',
        description: 'Manage money smarter with easy-to-use calculators for loans, savings, mortgages, taxes, and investments.',
        href: 'https://finance.health.calculation.site',
        icon: Landmark,
    },
    {
        title: 'Health & Fitness',
        description: 'Track your body metrics and fitness goals effortlessly, from BMI and calorie intake to BMR and macro ratios.',
        href: 'https://health.calculation.site',
        icon: Heart,
    },
    {
        title: 'Education & Science',
        description: 'Simplify complex equations for students, teachers, and curious minds. Covers physics, biology, and chemistry.',
        href: 'https://maths.calculation.site',
        icon: GraduationCap,
    },
    {
        title: 'ICT & Tech Utilities',
        description: 'Handy tools for developers and network engineers, including bandwidth calculators and subnet finders.',
        href: 'https://ict.health.calculation.site',
        icon: Cpu,
    },
    {
        title: 'Everyday Utilities',
        description: 'Get fast answers to daily questions — convert units, calculate time differences, measure areas, or check your GPA.',
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
