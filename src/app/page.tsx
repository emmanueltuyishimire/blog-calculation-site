
'use client';

import AppLayout from '@/components/app-layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { hubs } from '@/lib/hubs';
import { ArrowRight, ShieldCheck, Zap, Smartphone, Lock, Rocket, Mail, Scale, Landmark, GraduationCap, Cpu, Heart } from 'lucide-react';

export default function Home() {
  const whyChooseUs = [
    { text: 'Accurate & Reliable Results – All tools are tested and based on standard formulas.', icon: ShieldCheck },
    { text: 'Instant Calculations – Get answers without refreshing or waiting.', icon: Zap },
    { text: 'Simple & Intuitive Interface – Built for all devices and all ages.', icon: Smartphone },
    { text: 'Privacy-Friendly – We don’t collect personal data or require logins.', icon: Lock },
    { text: 'Constantly Growing – New tools and categories are added every week.', icon: Rocket },
  ];
  
  const mainHubs = hubs.slice(0, 5);

  return (
    <AppLayout>
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">
              Calculation.site – Smart Online Calculators & Everyday Tools
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empowering Your Daily Decisions With Precision and Simplicity
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                Welcome to Calculation.site, your all-in-one hub for free online calculators, converters, and digital tools designed to simplify everyday life. Whether you’re managing your finances, tracking your health and fitness, or solving complex math and science problems, our intelligent calculators help you make smarter decisions — instantly.
            </p>
          </div>
        </section>

        <section id="hubs" aria-labelledby="hubs-heading" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 id="hubs-heading" className="text-3xl font-bold tracking-tight font-headline">What You’ll Find on Calculation.site</h2>
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
                    <h2 id="why-choose-us-heading" className="text-3xl font-bold tracking-tight font-headline">Why Choose Calculation.site</h2>
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
        
        <footer className="bg-background border-t" aria-labelledby="footer-heading">
            <div className="container mx-auto px-6 py-12">
                 <h2 id="footer-heading" className="sr-only">Footer</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="font-bold text-lg font-headline mb-2">Get in Touch</h3>
                        <p className="text-muted-foreground">Have a suggestion or feedback? We’d love to hear from you!</p>
                        <a href="mailto:calculation250@gmail.com" className="text-primary hover:underline flex items-center justify-center md:justify-start gap-2">
                          <Mail aria-hidden="true" />
                          calculation250@gmail.com
                        </a>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg font-headline mb-2">Disclaimer</h3>
                        <p className="text-muted-foreground text-sm">
                            All calculators and tools are provided for informational and educational purposes only. Please consult a professional for financial, health, or legal advice.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg font-headline mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><Link href="https://calculation.site/about" className="text-muted-foreground hover:text-primary hover:underline">About Us</Link></li>
                            <li><Link href="https://calculation.site/contact" className="text-muted-foreground hover:text-primary hover:underline">Contact</Link></li>
                            <li><Link href="https://calculation.site/privacy-policy" className="text-muted-foreground hover:text-primary hover:underline">Privacy Policy</Link></li>
                            <li><Link href="https://calculation.site/terms-and-conditions" className="text-muted-foreground hover:text-primary hover:underline">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                 <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} <Link href="https://calculation.site" className="text-primary hover:underline">Calculation.site</Link>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

      </main>
    </AppLayout>
    );
}
