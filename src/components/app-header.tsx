
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Search from './search';

export default function AppHeader() {
  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/tools', label: 'Tools'},
    {href: '/calculators', label: 'Calculators'},
    {href: '/blog',label: 'Guides'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
  ];

  const [logoSrc, setLogoSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiIGQ9Ik0yMjQgODh2ODBhOCA4IDAgMCAxLTggOGgtNDBhOCA4IDAgMCAxLTggOFY5NmE4IDggMCAwIDEgOC04aDQwYTggOCAwIDAgMSA4IDhNUTIwOCAxNzYgMjA4IDE3NlY5NmMwLTQwLTMyLTcyLTcyLTcyUzY0IDU2IDY0IDk2djgwYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoNDBjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtNDhhOCA4IDAgMCAwLTE2IDB2NDhjMCA4Ljg0LTcuMTYgMTYtMTYgMTZoLTQwYy04Ljg0IDAtMTYtNy4xNi0xNi0xNlY5NmMwLTI2LjQ3IDIxLjUzLTQ4IDQ4LTQ4czQ4IDIxLjUzIDQ4IDQ4Wm0tMzIgNDBhOCA4IDAgMCAwLTggOHYxNmE4IDggMCAwIDAgMTYgMFYxNDRhOCA4IDAgMCAwLTgtOFptLTMxLjgxLTYxLjU0YTYuNzggNi43OCAwIDAgMC0xLjcyLS40NmgtMzIuOTRhNy42MiA3LjYyIDAgMCAwLTYgMy4zMmwtMjYuMDYgMzQuMDNhOC44OCA4Ljg4IDAgMCAwLS4zNiA5LjQ4YTguMjUgOC4yNSAwIDAgMCA3LjM2IDQuNjNoMjIuNzRhOCA4IDAgMCAwIDAtMTZIMzguNDRsMTYuMjYtMjEuMjFoMTQuMDhhOCA4IDAgMCAwIDAtMTZoLTEzLjQzYTE2LjE5IDE2LjE5IDAgMCAxLTEzLjE5IDcuMjdhOCA4IDAgMSAwIDAtMTZhMzIuNDkgMzIuNDkgMCAwIDAgMjkuMTgtMTkuMjdaTTIzMiA1OEg0OGE4IDggMCAwIDAtOCA4djE2YTggOCAwIDAgMCAxNiAwaDE2OGE4IDggMCAwIDAgMC0xNloiLz48L3N2Zz4="
  );

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Homepage">
          <img src={logoSrc} alt="Calculation Site Logo" width="32" height="32" />
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
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Search />
      </div>
    </header>
  );
}
