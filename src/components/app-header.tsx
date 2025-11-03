'use client';

import Link from 'next/link';

export default function AppHeader() {
  const navLinks = [
    {href: '/tools', label: 'Calculators and Tools'},
    {href: '/blog', label: 'Guides'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
  ];

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
          <img src="./logo.png" alt="Calculation Site Logo" width={32} height={32} className="size-8" />
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
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4"></div>
    </header>
  );
}
