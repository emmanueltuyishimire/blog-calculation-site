
import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { hubs } from '@/lib/hubs';


export default function ToolsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Tools Directory</h1>
            <p className="mt-2 text-muted-foreground">Explore our specialized hubs for all your calculation needs.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {hubs.map((hub) => {
                const Icon = hub.icon;
                return (
                    <Card key={hub.title} className="flex flex-col">
                        <CardHeader className="flex-row items-center gap-4">
                            <Icon className="size-10 text-primary" />
                            <div>
                                <CardTitle>{hub.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <CardDescription>{hub.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <a href={hub.href} target="_blank" rel="noopener noreferrer">
                                    Open Hub
                                    <ArrowRight className="ml-2 size-4" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
      </div>
    </AppLayout>
  );
}
