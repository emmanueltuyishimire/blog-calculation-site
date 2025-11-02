import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to Formula First, your intelligent partner for all things
              related to calculations and formulas. Our mission is to provide an
              intuitive and powerful tool for students, professionals, and anyone
              in need of quick and accurate computations.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
