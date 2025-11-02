import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsAndConditionsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              By using Formula First, you agree to our terms and conditions.
              Please read them carefully. The service is provided as-is, and we
              are not liable for any errors in calculations.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
