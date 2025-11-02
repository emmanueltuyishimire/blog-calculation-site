
import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { hubs } from '@/lib/hubs';
import Link from 'next/link';

export default function SitemapPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Sitemap</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Main Pages</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li><Link href="/" className="text-primary hover:underline">Home</Link></li>
                <li><Link href="/tools" className="text-primary hover:underline">Tools</Link></li>
                <li><Link href="/blog" className="text-primary hover:underline">Guides</Link></li>
                <li><Link href="/about" className="text-primary hover:underline">About</Link></li>
                <li><Link href="/contact" className="text-primary hover:underline">Contact</Link></li>
              </ul>
            </div>
            
            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">Tool Hubs</h2>
              <ul className="space-y-2 list-disc list-inside">
                {hubs.map((hub) => (
                  <li key={hub.title}>
                    <a href={hub.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {hub.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
                <h2 className="text-xl font-semibold mb-3">Legal</h2>
                <ul className="space-y-2 list-disc list-inside">
                    <li><Link href="/terms-and-conditions" className="text-primary hover:underline">Terms & Conditions</Link></li>
                    <li><Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></li>
                    <li><Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link></li>
                </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
