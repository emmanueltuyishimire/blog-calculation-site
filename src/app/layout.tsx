
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { cn } from '@/lib/utils';
import nextConfig from '../../next.config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

const basePath = nextConfig.basePath || '';
const siteUrl = `https://emmanueltuyishimire.github.io${basePath}`;


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Calculation.site – Smart Online Calculators & Everyday Tools',
    template: '%s | Calculation.site',
  },
  description: 'An intelligent app for free online calculators, converters, and digital tools designed to simplify everyday life for finance, health, and science.',
  keywords: ['calculator', 'free calculator', 'online calculator', 'finance calculator', 'health calculator', 'science calculator', 'unit converter'],
  authors: [{ name: 'Calculation.site Team' }],
  creator: 'Calculation.site',
  publisher: 'Calculation.site',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Calculation.site – Smart Online Calculators & Everyday Tools',
    description: 'An intelligent app for free online calculators, converters, and digital tools.',
    siteName: 'Calculation.site',
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Calculation.site Logo and Title',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculation.site – Smart Online Calculators & Everyday Tools',
    description: 'An intelligent app for free online calculators, converters, and digital tools.',
    images: [`/og-image.png`],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#673AB7' },
    { media: '(prefers-color-scheme: dark)', color: '#7e57c2' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, spaceGrotesk.variable)}>
      <head>
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3042243846300811"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
