'use client';

import { Download, FileSpreadsheet, FileText, FileType } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

interface AppHeaderProps {
  formula: string;
  result: string | number | null;
}

export default function AppHeader({ formula, result }: AppHeaderProps) {
  const handleExport = (format: 'txt' | 'csv' | 'pdf') => {
    let content = '';
    let mimeType = '';
    let filename = '';

    const safeResult = result ?? 'N/A';

    switch (format) {
      case 'txt':
        content = `Formula: ${formula}\nResult: ${safeResult}`;
        mimeType = 'text/plain';
        filename = 'calculation.txt';
        break;
      case 'csv':
        content = `formula,result\n"${formula.replace(/"/g, '""')}","${safeResult}"`;
        mimeType = 'text/csv';
        filename = 'calculation.csv';
        break;
      case 'pdf':
        alert('PDF export is not yet implemented.');
        return;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleExport('txt')}>
              <FileText className="mr-2 h-4 w-4" />
              TXT
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExport('csv')}>
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              CSV
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleExport('pdf')} disabled>
              <FileType className="mr-2 h-4 w-4" />
              PDF (Coming soon)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
