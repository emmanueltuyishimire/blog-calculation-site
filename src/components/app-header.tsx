'use client';

import Link from 'next/link';

export default function AppHeader() {
  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/blog', label: 'Guides'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
  ];

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-primary"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <line x1="8" x2="16" y1="6" y2="6" />
            <line x1="16" x2="16" y1="14" y2="18" />
            <line x1="8" x2="8" y1="10" y2="18" />
            <line x1="8" x2="16" y1="14" y2="14" />
          </svg>
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
