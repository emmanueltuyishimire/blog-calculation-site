import AppLayout from '@/components/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, Heart, FlaskConical, Cpu, Home } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Calculation Site',
  description: 'Learn about our mission to provide simple, accurate, and reliable online tools for everyday problem-solving in finance, health, science, and more.',
  keywords: ['about us', 'mission', 'online calculators', 'free tools', 'Calculation Site'],
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline">About Calculation Site</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-lg text-muted-foreground">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Who We Are</h2>
                <p>
                    Welcome to Calculation Site, your all-in-one destination for simple, accurate, and reliable online tools.
                    Our mission is to make everyday problem-solving easier — whether you’re managing your budget, checking your health metrics, converting units, or exploring scientific equations.
                </p>
                <p>
                    We believe that everyone deserves free access to accurate calculators and helpful information without distractions or paywalls.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">What We Do</h2>
                <p>
                    Calculation Site brings together collections of specialized web apps, called Hubs, each focused on a particular topic such as:
                </p>
                <ul className="space-y-3 pl-5 list-none">
                    <li className="flex items-start">
                        <Landmark className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                        <span><b>Finance Tools</b> — for budgeting, investing, and financial planning</span>
                    </li>
                    <li className="flex items-start">
                        <Heart className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                        <span><b>Health &amp; Fitness Calculators</b> — for better wellness tracking</span>
                    </li>
                    <li className="flex items-start">
                        <FlaskConical className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                        <span><b>Math &amp; Science Tools</b> — for students and professionals</span>
                    </li>
                    <li className="flex items-start">
                        <Cpu className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                        <span><b>ICT Utilities</b> — for developers, IT experts, and tech enthusiasts</span>
                    </li>
                    <li className="flex items-start">
                        <Home className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                        <span><b>Everyday Tools</b> — for home, construction, time, and daily life</span>
                    </li>
                </ul>
                <p>
                    Every calculator is designed for speed, accuracy, and ease of use — with no registration required.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Our Blog</h2>
                <p>
                    Alongside our tools, we maintain a weekly-updated blog offering guides, tutorials, and educational resources related to technology, productivity, personal finance, and daily problem-solving.
                    Our goal is to help readers make better, data-driven decisions in their daily lives.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Our Vision</h2>
                <p>
                    We aim to build the internet’s most trusted open platform for practical calculations and smart tools — empowering millions of people around the world to save time, make better choices, and stay informed.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
                <p>
                    We value your feedback and suggestions. If you notice an error in any calculator or have an idea for a new tool, please reach out via our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
                </p>
                <p>
                    You can also email us directly at: <a href="mailto:support@calculation.site" className="text-primary hover:underline">support@calculation.site</a>
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
