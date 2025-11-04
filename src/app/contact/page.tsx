import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Mail, Bug, Lightbulb, Briefcase, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Calculation Site team. We welcome your feedback, bug reports, suggestions for new calculators, or business inquiries.',
    keywords: ['contact', 'feedback', 'support', 'bug report', 'suggestions', 'business inquiry'],
    alternates: {
      canonical: '/contact',
    },
};

export default function ContactPage() {
  return (
    <AppLayout>
      <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-lg text-muted-foreground">
            <p className="text-center">
              We’d love to hear from you! Whether you have feedback, suggestions, or questions about our tools and resources, we’re here to help.
            </p>

            <div className="space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h2 className="text-2xl font-semibold text-foreground flex items-center"><Mail className="mr-3 h-6 w-6 text-primary" /> Get in Touch</h2>
                <p>
                    If you’d like to contact us, please reach out via email at:
                </p>
                <p className='text-center'>
                    <a href="mailto:calculation250@gmail.com" className="font-semibold text-primary hover:underline text-xl">
                    calculation250@gmail.com
                    </a>
                </p>
                <p className="text-sm text-center">
                    We aim to respond to all messages within 48 hours on business days.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">What You Can Contact Us About</h2>
                <ul className="space-y-3 list-none">
                    <li className="flex items-start">
                        <Bug className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Reporting a bug or issue with one of our tools</span>
                    </li>
                    <li className="flex items-start">
                        <Lightbulb className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Requesting a new calculator or feature</span>
                    </li>
                    <li className="flex items-start">
                        <Briefcase className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Business or collaboration inquiries</span>
                    </li>
                </ul>
            </div>
            
            <div className="space-y-2 pt-4 border-t flex items-start">
                <AlertTriangle className="mr-3 mt-1 h-5 w-5 text-amber-500 flex-shrink-0" />
                <div className='text-sm'>
                    <h3 className='font-semibold text-foreground mb-1'>Note</h3>
                    <p>
                        We do not collect personal data beyond what’s necessary to respond to your inquiries. For details, please review our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </p>
                </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
