'use client';

import { Sigma } from 'lucide-react';
import Link from 'next/link';

export default function AppHeader() {

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
            <Sigma className="size-8 text-primary" />
            <h2 className="text-xl font-bold font-headline hidden sm:block">Calculation Site</h2>
        </Link>
      </div>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-6">
        <Link
          href="/tools"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Tools
        </Link>
        <Link
          href="/blog"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Guides
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </Link>
        <Link
          href="/terms-and-conditions"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Terms
        </Link>
        <Link
          href="/privacy-policy"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Privacy
        </Link>
        <Link
          href="/disclaimer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Disclaimer
        </Link>
        <Link
          href="/sitemap"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Sitemap
        </Link>
      </nav>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
      </div>
    </header>
  );
}
