'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAV5JREFUWIXt1r1KA0EYxfFf9+ASBBtBBL+CW8E2YmGptdBGSMA2Yp2g2NppZ+AK2NhYpBC0sVIQBCs/QMS0G5MDf+Sc/HCGc5Jz9p4gUvFfYYMwgo1wAis4xwg+c4AP3OHR/xVn2MccRjjAAR5wjgF84ALf+MWp9AfcYIW5xGg20Yg3rKKLbXCBsYFxtsIPdohjLOM8xjjAAR7whCO84RVX6k/wgh9sYh9b2MEZxtjFE55xjhV84R1X6gP08Y1t7GAH9zjFF/5whyf8YI4h/OEbH/jAN97xi3P1B5zhHW/YxjZ28IQn/OIMB/jAF37xjh+84hWX6gP0cIQh/OAbH/jAN77xSz84xwh+8Ikf/OAb3/jFfV0gUvEfcY0nLOMC3/jFGc5whlU84RxL+MIv7jCIB9ziFRdYxDd+8YxV/PMbK/gBR/jFMX4BBw4Yk9+R62oAAAAASUVORK5CYII="
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
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4"></div>
    </header>
  );
}
