
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://calculation.site';
  
  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: '/search',
        }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
