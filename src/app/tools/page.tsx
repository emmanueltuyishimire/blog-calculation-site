import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ToolsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Card>
          <CardHeader>
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">
              This is where the tools directory (hub list) will be.
            </p>
            <Button asChild>
                <Link href="/">Go to Formula Editor</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
