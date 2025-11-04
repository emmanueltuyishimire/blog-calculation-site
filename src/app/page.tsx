
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { hubs } from '@/lib/hubs';
import { ArrowRight, ShieldCheck, Zap, Smartphone, Lock, Rocket } from 'lucide-react';

export default function Home() {
  const whyChooseUs = [
    { text: 'Accurate & Reliable Results – All tools are tested and based on standard formulas.', icon: ShieldCheck },
    { text: 'Instant Calculations – Get answers without refreshing or waiting.', icon: Zap },
    { text: 'Simple & Intuitive Interface – Built for all devices and all ages.', icon: Smartphone },
    { text: 'Privacy-Friendly – We don’t collect personal data or require logins.', icon: Lock },
    { text: 'Constantly Growing – New tools and categories are added every week.', icon: Rocket },
  ];
  
  const mainHubs = hubs.slice(0, 6);

  return (
    <>
        <section className="bg-background py-16 md:py-24 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">
              Smart Online Calculators & Everyday Tools
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empowering Your Daily Decisions With Precision and Simplicity
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                Welcome to Calculation Site, your all-in-one hub for free online calculators, converters, and digital tools designed to simplify everyday life. Whether you’re managing your finances, tracking your health and fitness, or solving complex math and science problems, our intelligent calculators help you make smarter decisions — instantly.
            </p>
          </div>
        </section>

        <section id="hubs" aria-labelledby="hubs-heading" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 id="hubs-heading" className="text-3xl font-bold tracking-tight font-headline">What You’ll Find on Calculation Site</h2>
                    <p className="mt-2 text-muted-foreground">We’ve built a collection of specialized calculator hubs tailored to real-world needs:</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {mainHubs.map((hub) => {
                        const Icon = hub.icon;
                        return (
                            <Card key={hub.title} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                <CardHeader className="flex-row items-center gap-4">
                                    <Icon className="size-10 text-primary" aria-hidden="true" />
                                    <CardTitle className="text-xl">{hub.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground">{hub.description}</p>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <Button asChild className="w-full">
                                        <Link href={hub.href}>
                                            Open Hub
                                            <ArrowRight className="ml-2 size-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild variant="secondary" size="lg">
                        <Link href="/tools">
                            View All Hubs
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        <section aria-labelledby="why-choose-us-heading" className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h2 id="why-choose-us-heading" className="text-3xl font-bold tracking-tight font-headline">Why Choose Calculation Site</h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                   {whyChooseUs.map((item) => {
                       const Icon = item.icon;
                       return (
                        <div key={item.text} className="flex items-start gap-4">
                            <Icon className="size-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                            <p className="text-muted-foreground">{item.text}</p>
                        </div>
                   )})}
                </div>
            </div>
        </section>

        <section aria-labelledby="blog-heading" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 id="blog-heading" className="text-3xl font-bold tracking-tight font-headline mb-4">From Our Blog</h2>
                <p className="text-muted-foreground mb-6">
                    Stay informed with our helpful, easy-to-understand guides. Our blog publishes tips, tutorials, and explanations around finance, health, productivity, and smart living — all connected to our calculators for deeper insights.
                </p>
                <Button asChild size="lg">
                    <Link href="/blog">
                        Visit Our Blog <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
        </section>
        
        <section aria-labelledby="mission-heading" className="py-16 md:py-24">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 id="mission-heading" className="text-3xl font-bold tracking-tight font-headline mb-4">Our Mission</h2>
                <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6 text-left">
                    “To make complex calculations easy, accessible, and meaningful for everyone — anywhere in the world.”
                </blockquote>
                <p className="mt-6 text-base text-muted-foreground">
                    We believe that the right tools can empower better decisions — in business, education, health, and daily life.
                </p>
            </div>
        </section>
    </>
    );
}
