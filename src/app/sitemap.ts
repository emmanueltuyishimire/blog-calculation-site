
import { MetadataRoute } from 'next';
import { mathsCalculatorCategories } from '@/lib/maths-calculators';
import { physicsCalculatorCategories } from '@/lib/physics-calculators';
import { ictToolCategories } from '@/lib/ict-tools';
import { hubs } from '@/lib/hubs';

export const dynamic = 'force-static';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calculation.site';

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: `${baseUrl}/hubs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/calculators`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3, },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3, },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3, },
    { url: `${baseUrl}/performance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7, },
    { url: `${baseUrl}/maths`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/search`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  const hubPages = hubs.map(hub => ({
    url: `${baseUrl}${hub.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const mathCalculatorPages = mathsCalculatorCategories.flatMap(category => 
    category.calculators.map(calculator => ({
      url: calculator.href,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const physicsCalculatorPages = physicsCalculatorCategories.flatMap(category => 
    category.calculators.map(calculator => ({
      url: calculator.href.startsWith('http') ? calculator.href : `${baseUrl}${calculator.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const ictToolPages = ictToolCategories.flatMap(category => 
    category.tools.map(tool => ({
      url: tool.href,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [
    ...mainPages,
    ...hubPages,
    ...mathCalculatorPages,
    ...physicsCalculatorPages,
    ...ictToolPages,
  ].filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.url === value.url
    ))
  );
}
