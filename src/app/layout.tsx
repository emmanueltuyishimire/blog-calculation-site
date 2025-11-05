
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const siteUrl = 'https://calculation.site';


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Calculation Site – Smart Online Calculators & Everyday Tools',
    template: '%s | Calculation Site',
  },
  description: 'An intelligent app for free online calculators, converters, and digital tools designed to simplify everyday life for finance, health, and science.',
  keywords: ['calculator', 'free calculator', 'online calculator', 'finance calculator', 'health calculator', 'science calculator', 'unit converter'],
  authors: [{ name: 'Calculation Site Team' }],
  creator: 'Calculation Site',
  publisher: 'Calculation Site',
  robots: 'index, follow',
  icons: {
    icon: './favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Calculation Site – Smart Online Calculators & Everyday Tools',
    description: 'An intelligent app for free online calculators, converters, and digital tools.',
    siteName: 'Calculation Site',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'Calculation Site Logo and Title',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculation Site – Smart Online Calculators & Everyday Tools',
    description: 'An intelligent app for free online calculators, converters, and digital tools.',
    images: ['./og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#3b82f6' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable)}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XFXW29LKY3"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XFXW29LKY3');
          `}
        </Script>
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3042243846300811"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-body antialiased flex min-h-screen flex-col bg-background" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
