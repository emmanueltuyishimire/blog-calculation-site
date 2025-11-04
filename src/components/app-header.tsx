'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AppHeader() {
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    // This code runs only on the client, after the component has mounted
    const savedLogo = localStorage.getItem('appLogo');
    if (savedLogo) {
      setLogoSrc(savedLogo);
    }
  }, []);

  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/blog', label: 'Guides'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
    {href: '/logo-upload', label: 'Logo'},
  ];

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Homepage">
          {logoSrc ? (
            <img src={logoSrc} alt="Calculation Site Logo" className="h-8 w-8 object-contain" />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
              Logo
            </div>
          )}
          <h2 className="text-xl font-bold font-headline hidden sm:block">Calculation Site</h2>
        </Link>
      </div>
      <nav
        aria-label="Main navigation"
        className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-6"
      >
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4"></div>
    </header>
  );
}
