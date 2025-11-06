
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Calculation Site – Smart Online Calculators & Everyday Tools',
    short_name: 'Calculation Site',
    description: 'An intelligent app for free online calculators, converters, and digital tools designed to simplify everyday life for finance, health, and science.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
