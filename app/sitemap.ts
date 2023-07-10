import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.importlio.com',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/ecommerce-tutorials',
      lastModified: new Date(),
    },
  ]
}