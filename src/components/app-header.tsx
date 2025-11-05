

'use client';

import Link from 'next/link';
import { useState } from 'react';
import Search from './search';
import { Button } from './ui/button';
import { Menu, X, Calculator, LayoutGrid } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from './ui/sheet';

export default function AppHeader() {
  const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/hubs', label: 'Hubs', screenReaderLabel: 'All hubs'},
    {href: '/calculators', label: 'Calculators', screenReaderLabel: 'All calculators'},
    {href: '/tools', label: 'Tools', screenReaderLabel: 'All tools'},
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
            {link.screenReaderLabel && <span className="sr-only">{link.screenReaderLabel}</span>}
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
            <div className="flex items-center gap-2 font-semibold p-6" aria-label="Homepage">
                <Calculator className="h-8 w-auto text-primary" />
                <span className="text-xl font-bold font-headline">Calculation Site</span>
            </div>
            <SheetHeader className="p-6 pt-0">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                    Main navigation links for Calculation Site.
                </SheetDescription>
            </SheetHeader>
            <div className="px-6 sm:hidden">
                <Search />
            </div>
            <nav className="flex flex-col gap-6 text-lg font-medium pt-8 px-6" aria-label="Mobile navigation">
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
                  {link.screenReaderLabel && <span className="sr-only">{link.screenReaderLabel}</span>}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
