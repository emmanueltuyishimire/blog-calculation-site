import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Have questions or feedback? We'd love to hear from you. Please
              reach out to us at contact@formulafirst.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
