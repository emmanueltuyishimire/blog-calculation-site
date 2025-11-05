
import Link from 'next/link';
import { sitePages } from '@/lib/site-pages';
import Image from 'next/image';

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src="/logo.png" alt="Calculation Site Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="text-xl font-bold font-headline text-foreground">Calculation Site</span>
            </Link>
            <p className="mt-2 max-w-xs">
              Smart tools for everyday calculations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/hubs" className="hover:text-primary hover:underline">Hubs</Link></li>
                <li><Link href="/calculators" className="hover:text-primary hover:underline">Calculators</Link></li>
                <li><Link href="/blog" className="hover:text-primary hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2">
                {sitePages.filter(p => ['Disclaimer', 'Privacy Policy', 'Terms of Service'].includes(p.title)).map((page) => (
                    <li key={page.href}>
                        <Link href={page.href} className="hover:text-primary hover:underline">
                            {page.title}
                        </Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm">
          <p>&copy; {currentYear} Calculation Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
