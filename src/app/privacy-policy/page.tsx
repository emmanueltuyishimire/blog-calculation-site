import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Your privacy is important to us. This privacy policy explains how
              we collect, use, and protect your information. We do not sell your
              data to third parties.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
