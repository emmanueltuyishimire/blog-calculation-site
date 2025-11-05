
import type { Metadata } from 'next';
import ToolsContent from './tools-content';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'ICT & Tech Utilities Hub',
    description: 'A collection of handy tools for developers, network engineers, and tech enthusiasts. Find utilities for networking, web development, security, and more.',
    keywords: ['ICT tools', 'tech utilities', 'developer tools', 'networking calculator', 'subnet calculator', 'password generator'],
    alternates: {
      canonical: '/tools',
    },
};

export default function ToolsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ToolsContent />
        </Suspense>
    )
}
