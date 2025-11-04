import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function AppFooter() {
  return (
    <footer className="bg-background border-t" aria-labelledby="footer-heading">
        <div className="container mx-auto px-6 py-12">
             <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="font-bold text-lg font-headline mb-2">Get in Touch</h3>
                    <p className="text-muted-foreground">Have a suggestion or feedback? We’d love to hear from you!</p>
                    <a href="mailto:calculation250@gmail.com" className="text-primary hover:underline flex items-center justify-center md:justify-start gap-2">
                      <Mail aria-hidden="true" />
                      calculation250@gmail.com
                    </a>
                </div>
                <div>
                    <h3 className="font-bold text-lg font-headline mb-2">Disclaimer</h3>
                    <p className="text-muted-foreground text-sm">
                        All calculators and tools are provided for informational and educational purposes only. Please consult a professional for financial, health, or legal advice.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg font-headline mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                        <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                        <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                        <li><Link href="/terms-and-conditions" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                        <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary">Disclaimer</Link></li>
                    </ul>
                </div>
            </div>
             <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} <Link href="/" className="text-primary hover:underline">Calculation Site</Link>. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
}
