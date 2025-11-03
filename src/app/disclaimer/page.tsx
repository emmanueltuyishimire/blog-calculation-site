
import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DisclaimerPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Disclaimer</CardTitle>
            <p className="text-muted-foreground">Last Updated: November 1, 2025</p>
          </CardHeader>
          <CardContent className="space-y-6 text-lg text-muted-foreground max-w-4xl mx-auto">
            <p>
              The information, tools, and calculators provided on Calculation.site are intended for educational and informational purposes only. While we strive to ensure accuracy and reliability, we do not guarantee that the information on this website is always correct, complete, or up to date.
            </p>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">1. Not Professional Advice</h2>
              <p>
                All tools and calculations on this website are provided “as is” without any warranties. They should not be considered as financial, medical, fitness, legal, or professional advice. Always consult a qualified expert before making any important decisions based on results from our tools.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">2. Accuracy of Calculations</h2>
              <p>Our calculators are designed for convenience and quick estimation. While we do our best to make them accurate, results may vary based on:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>Input errors</li>
                <li>Formula limitations</li>
                <li>Updated standards or industry practices</li>
              </ul>
              <p>
                We are not liable for any damages, losses, or consequences resulting from the use of these tools.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">3. External Links</h2>
              <p>
                Our website may include links to third-party websites for additional resources or references. We are not responsible for the content, accuracy, or privacy practices of any external sites.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">4. Advertising and Affiliates</h2>
              <p>
                This website may display advertisements through Google AdSense or other ad networks. We do not directly endorse any products or services shown in ads. Affiliate links may also be used, and we may earn a small commission at no additional cost to you if you make a purchase through those links.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">5. User Responsibility</h2>
              <p>By using this website, you agree that:</p>
              <ul className="list-disc pl-8 space-y-1">
                <li>You are responsible for verifying all information and results before making decisions.</li>
                <li>You will not hold Calculation Site, its creators, or contributors liable for any outcomes related to your use of this website or its tools.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">6. Contact</h2>
              <p>
                For questions about this disclaimer or our website policies, please contact us at:{' '}
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
