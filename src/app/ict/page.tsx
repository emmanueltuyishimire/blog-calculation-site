import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ictToolCategories } from '@/lib/ict-tools';

export default function IctPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight font-headline">ICT & Tech Utilities</h1>
            <p className="mt-2 text-muted-foreground">A collection of handy tools for developers, network engineers, and tech enthusiasts.</p>
        </div>

        {ictToolCategories.map((category) => (
            <Card key={category.name}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <category.icon className="text-primary size-6" />
                        {category.name}
                    </CardTitle>
                    {category.description && <CardDescription>{category.description}</CardDescription>}
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {category.tools.map((tool) => (
                        <Button key={tool.name} asChild variant="outline">
                            <Link href={tool.href}>
                                {tool.name}
                            </Link>
                        </Button>
                    ))}
                </CardContent>
            </Card>
        ))}
      </div>
    </AppLayout>
  );
}
