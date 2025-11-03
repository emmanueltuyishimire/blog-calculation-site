import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Read the Terms of Service for using Calculation Site. By using our website and tools, you agree to comply with our terms and conditions.',
    keywords: ['terms of service', 'terms and conditions', 'user agreement', 'website policy', 'intellectual property'],
    alternates: {
      canonical: '/terms-and-conditions',
    },
};

export default function TermsAndConditionsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
            <p className="text-muted-foreground">Last Updated: November 1, 2025</p>
          </CardHeader>
          <CardContent className="space-y-6 text-lg text-muted-foreground max-w-4xl mx-auto">
            <p>
              Welcome to Calculation Site. By accessing or using this website, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By using Calculation Site, you confirm that you are at least 13 years old and that you have read, understood, and agree to these Terms of Service. We may update these terms periodically, and your continued use of the site after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">2. Use of Website and Tools</h2>
              <p>You may use the calculators, tools, and content on this site solely for personal and non-commercial purposes. You agree not to:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>Copy, modify, distribute, or sell any part of our content or tools without permission.</li>
                <li>Use our website for unlawful, harmful, or fraudulent activities.</li>
                <li>Attempt to disrupt or interfere with our website’s functionality or security.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">3. Accuracy of Information</h2>
              <p>
                All information and tools on this website are provided for general informational purposes only. While we make every effort to ensure accuracy, Calculation Site does not guarantee that all content or results are free from errors or omissions. You are responsible for verifying all outputs before relying on them for personal, financial, or professional decisions.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property Rights</h2>
              <p>
                All text, design, graphics, logos, tools, and source code on this website are the intellectual property of Calculation Site unless otherwise stated. Unauthorized reproduction or redistribution of our materials is strictly prohibited.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">5. Third-Party Links and Ads</h2>
              <p>
                Our website may include links or advertisements from third parties. We are not responsible for the accuracy, content, or practices of these external sites. Your interactions with advertisers or other websites are solely between you and those parties.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
              <p>Calculation Site, its developers, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>Use or inability to use our website or tools.</li>
                <li>Errors, omissions, or inaccuracies in calculator results or content.</li>
                <li>Unauthorized access to your data or transmissions.</li>
              </ul>
              <p>Your sole remedy is to discontinue using this website.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">7. Privacy Policy</h2>
              <p>
                Your use of this website is also governed by our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>, which outlines how we collect and protect your information.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate access to this website at any time, without notice, if we believe that you have violated these terms or engaged in harmful activities.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">9. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of your local jurisdiction, without regard to conflict of law principles.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:{' '}
                <a href="mailto:calculation250@gmail.com" className="text-primary hover:underline">
                  calculation250@gmail.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
