
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Search from './search';
import { Button } from './ui/button';
import { Menu, X, Calculator } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { LayoutGrid } from 'lucide-react';

export default function AppHeader() {
  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/hubs', label: 'Hubs'},
    {href: '/calculators', label: 'Calculators'},
    {href: '/tools', label: 'Tools'},
    {href: '/blog',label: 'Guides'},
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoSrc = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M224 88v80a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m-16-8a8 8 0 0 0-8-8h-24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8Zm-40-40a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0V80h112v16a8 8 0 0 0 16 0V72a8 8 0 0 0-8-8m-71.55 39.36a8 8 0 0 0-10.42-3.2A104.38 104.38 0 0 0 32 124v36a8 8 0 0 0 16 0v-32.61c16.3-4.43 32.22-4.43 48.43-.16l.14.05a8 8 0 0 0 7-10.82l-3.23-9.35a8 8 0 0 0-3.32-4.11Zm-14 17.51c-13.91-3.66-28-3.66-42 .06l.32-.13Zm18.89-29.74a8 8 0 0 0-14.68 6.74l1.62 4.67a24.12 24.12 0 0 1 11.44-4.82Z"/></svg>`;

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
            {link.label === 'Calculators' && <Calculator className="h-4 w-4" />}
            {link.label === 'Hubs' && <LayoutGrid className="h-4 w-4" />}
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
                  {link.label === 'Calculators' && <Calculator className="h-5 w-5" />}
                  {link.label === 'Hubs' && <LayoutGrid className="h-5 w-5" />}
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
