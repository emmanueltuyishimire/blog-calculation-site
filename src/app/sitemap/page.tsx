import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function SitemapPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Sitemap</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><Link href="/" className="text-primary hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-primary hover:underline">About</Link></li>
              <li><Link href="/contact" className="text-primary hover:underline">Contact</Link></li>
              <li><Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
