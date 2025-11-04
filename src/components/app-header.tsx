
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Search from './search';
import { Button } from './ui/button';
import { Menu, X, Calculator } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function AppHeader() {
  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/tools', label: 'Hubs'},
    {href: '/maths', label: 'Maths'},
    {href: '/ict', label: 'ICT'},
    {href: '/calculators', label: 'Smart Calc'},
    {href: '/blog',label: 'Guides'},
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoSrc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9ImhzbCh2YXIoLS1wcmltYXJ5KSkiIGQ9Ik0yMjQgODh2ODBhOCA4IDAgMCAxLTggOGgtNDBhOCA4IDAgMCAxLTggOFY5NmE4IDggMCAwIDEgOC04aDQwYTggOCAwIDAgMSA4IDhNUTIwOCAxNzYgMjA4IDE3NlY5NmMwLTQwLTMyLTcyLTcyLTcyUzY0IDU2IDY0IDk2djgwYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoNDBjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtNDhhOCA4IDAgMCAwLTE2IDB2NDhjMCA4Ljg0LTcuMTYgMTYtMTYgMTZoLTQwYy04Ljg0IDAtMTYtNy4xNi0xNi0xNlY5NmMwLTI2LjQ3IDIxLjUzLTQ4IDQ4LTQ4czQ4IDIxLjUzIDQ4IDQ4Wm0tMzIgNDBhOCA4IDAgMCAwLTggOHYxNmE4IDggMCAwIDAgMTYgMFYxNDRhOCA4IDAgMCAwLTgtOFptLTMxLjgxLTYxLjU0YTYuNzggNi4yOCAwIDAgMC0xLjcyLS40NmgtMzIuOTRhNy42MiA3LjYyIDAgMCAwLTYgMy4zMmwtMjYuMDYgMzQuMDNhOC44OCA4Ljg4IDAgMCAwLS4zNiA5LjQ4YTguMjUgOC4yNSAwIDAgMCA3LjM2IDQuNjNoMjIuNzRhOCA4IDAgMCAwIDAtMTZIMzguNDRsMTYuMjYtMjEuMjFoMTQuMDhhOCA4IDAgMCAwIDAtMTZoLTEzLjQzYTE2LjE5IDE2LjE5IDAgMCAxLTEzLjE5IDcuMjdhOCA4IDAgMSAwIDAtMTZhMzIuNDkgMzIuNDkgMCAwIDAgMjkuMTgtMTkuMjdaTTIzMiA1OEg0OGE4IDggMCAwIDAtOCA4djE2YTggOCAwIDAgMCAxNiAwaDE2OGE4IDggMCAwIDAgMC0xNloiLz48L3N2Zz4=";

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Homepage">
        <img src={logoSrc} alt="Calculation Site Logo" width="32" height="32" />
        <span className="text-xl font-bold font-headline hidden sm:inline-block">Calculation Site</span>
        <span className="text-xl font-bold font-headline sm:hidden">CalcSite</span>
      </Link>
      
      <nav
        aria-label="Main navigation"
        className="hidden md:flex md:items-center md:gap-5 lg:gap-6 ml-6"
      >
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1"
          >
            {link.label === 'Smart Calc' && <Calculator className="h-4 w-4" />}
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="hidden sm:block">
          <Search />
        </div>
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open main menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 text-lg font-medium pt-8">
              <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Homepage" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logoSrc} alt="Calculation Site Logo" width="32" height="32" />
                <span className="text-xl font-bold font-headline">Calculation Site</span>
              </Link>
              <div className="sm:hidden">
                <Search />
              </div>
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2"
                >
                  {link.label === 'Smart Calc' && <Calculator className="h-5 w-5" />}
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
