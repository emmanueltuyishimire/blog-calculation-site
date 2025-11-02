import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DisclaimerPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The calculations provided by Calculation Site are for informational
              purposes only and should not be used for making critical
              decisions without verification. We are not responsible for any
              consequences arising from the use of this app.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
