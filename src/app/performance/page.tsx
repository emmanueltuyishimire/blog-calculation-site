
import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PerformancePage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is where performance analysis tools will be.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
