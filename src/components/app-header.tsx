'use client';

import Link from 'next/link';

export default function AppHeader() {
  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/blog', label: 'Guides'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
  ];

  const logoDataUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGN1bGF0b3IiPjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIyMCIgeD0iNCIgeT0iMiIgcng9IjIiLz48bGluZSB4MT0iOCIgeDI9IjE2IiB5MT0iNiIgeTI9IjYiLz48bGluZSB4MT0iOCIgeDI9IjE2IiB5MT0iMTAiIHkyPSIxMCIvPjxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIxNCIgeTI9IjE0Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNiIgeTE9IjE4IiB5Mj0iMTgiLz48L3N2Zz4=";

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Homepage">
          <img src={logoDataUri} alt="Calculation Site Logo" width="32" height="32" />
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
