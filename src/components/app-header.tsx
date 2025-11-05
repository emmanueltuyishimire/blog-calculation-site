

'use client';

import Link from 'next/link';
import { useState } from 'react';
import Search from './search';
import { Button } from './ui/button';
import { Menu, X, Calculator, LayoutGrid } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetDescription, SheetTitle } from './ui/sheet';

export default function AppHeader() {
  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/hubs', label: 'Hubs'},
    {href: '/calculators', label: 'Calculators'},
    {href: '/tools', label: 'Tools'},
    {href: '/blog',label: 'Guides'},
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Homepage">
        <Calculator className="h-8 w-auto text-primary" />
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
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <SheetDescription className="sr-only" id="mobile-menu-description">
              Main navigation links for Calculation Site.
            </SheetDescription>
            <nav className="flex flex-col gap-6 text-lg font-medium pt-8" aria-describedby="mobile-menu-description">
              <Link href="/" className="flex items-center gap-2 font-semibold" aria-label="Homepage" onClick={() => setIsMobileMenuOpen(false)}>
                <Calculator className="h-8 w-auto text-primary" />
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
