import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Our Privacy Policy explains how we collect, use, and protect your information when you use our website and tools. We are committed to your privacy.',
    keywords: ['privacy policy', 'data protection', 'cookies', 'user rights', 'information collection'],
    alternates: {
      canonical: '/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
            <p className="text-center text-muted-foreground">Last Updated: November 1, 2025</p>
          </CardHeader>
          <CardContent className="space-y-6 text-lg text-muted-foreground max-w-4xl mx-auto">
            <p>
              Welcome to Calculation Site. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and tools.
            </p>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
              <p>We may collect the following types of information when you visit or use our site:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>
                  <strong>Non-personal information:</strong> Such as browser type, device information, pages visited, time spent, and general location (country/city level).
                </li>
                <li>
                  <strong>Personal information (optional):</strong> Only when you voluntarily contact us via email at{' '}
                  <a href="mailto:calculation250@gmail.com" className="text-primary hover:underline">calculation250@gmail.com</a>.
                </li>
              </ul>
              <p>
                We do not collect or store any sensitive personal information such as passwords, financial details, or health data.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">2. How We Use Information</h2>
              <p>We use collected data to:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>Improve user experience and functionality of our tools</li>
                <li>Analyze usage patterns to enhance performance</li>
                <li>Display relevant ads through Google AdSense or other ad networks</li>
                <li>Respond to user feedback or inquiries</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">3. Cookies and Advertising</h2>
              <p>Our site uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>Personalize content and ads</li>
                <li>Measure ad performance</li>
                <li>Provide social media and analytics integrations</li>
              </ul>
              <p>
                Google AdSense and other third-party vendors may use cookies (including the DoubleClick cookie) to serve ads based on your prior visits to our site or other websites. You can opt out of personalized ads by visiting{' '}
                <a href="https://www.google.com/settings/ads" rel="noopener noreferrer" className="text-primary hover:underline">
                  Google Ads Settings
                </a>.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">4. Third-Party Services</h2>
              <p>We may use third-party tools and analytics services such as:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>Google Analytics</li>
                <li>Google AdSense</li>
              </ul>
              <p>These services may collect anonymized usage data in compliance with their respective privacy policies.</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">5. Data Protection</h2>
              <p>
                We take appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">6. Your Rights</h2>
              <p>You may:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>Request deletion of your data by contacting us</li>
                <li>Opt out of cookies or personalized ads using browser settings</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">7. Children’s Privacy</h2>
              <p>
                Our tools and website are intended for a general audience and not directed toward children under 13. We do not knowingly collect data from minors.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Updates will be posted on this page with a new "Last Updated" date.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">9. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:{' '}
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
