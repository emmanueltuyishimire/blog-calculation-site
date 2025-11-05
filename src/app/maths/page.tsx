
import type { Metadata } from 'next';
import MathsContent from './maths-content';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Maths Calculators Hub',
    description: 'Explore a comprehensive collection of free online math calculators for algebra, geometry, statistics, calculus, and more. Get instant answers for your math problems.',
    keywords: ['maths calculators', 'math hub', 'algebra calculator', 'geometry calculator', 'statistics tools', 'calculus solver'],
    alternates: {
      canonical: '/maths',
    },
};

export default function MathsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MathsContent />
        </Suspense>
    )
}
