import BasePage from '../components/BasePage';
import TopFeatures from '@/components/heros/TopFeatures';

import type { Metadata } from "next";

import  JsonLd  from '@/app/components/JsonLd'

export const metadata: Metadata = {
  title: "Features of Shopify Amazon Dropshipping Importer App | Importlio",
  description: "Explore the powerful features of the Importlio Shopify app for importing products from Amazon to your store.",
  keywords: [
    "Amazon dropshipping",
    "Product importer",
    "Shopify store integration",
    "Amazon affiliates",
    "Amazon associates",
    "Dropshipping automation",
    "E-commerce management",
    "Product synchronization",
    "CSV import",
    "Amazon URL import",
    "Affiliate marketing",
    "Shopify app",
    "Shopify dropshipping",
    "Shopify product importer",
    "Shopify product importer app",
    "Shopify product importer plugin",
    "Shopify product importer software",
    "Shopify product importer tool",
    "Shopify product import",
    "Shopify product import app",
    "Shopify product import plugin",
    "Shopify product import software",
    "Shopify product import tool",
    "Shopify product import from amazon",
  ]
}
export default function Page() {

    const json = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "Importlio App Features",
        "description": "Explore the powerful features of the Importlio Shopify app for importing products from Amazon to your store.",
        "url": "https://www.importlio.com/features",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://www.importlio.com",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://www.importlio.com/features",
                "name": "Features"
              }
            }
          ]
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.importlio.com/features"
        },
        // "image": {
        //   "@type": "ImageObject",
        //   "url": "https://www.importlio.com/images/features-banner.jpg",
        //   "height": 800,
        //   "width": 1600
        // },
        // "primaryImageOfPage": {
        //   "@type": "ImageObject",
        //   "url": "https://www.importlio.com/images/features-thumbnail.jpg",
        //   "height": 300,
        //   "width": 300
        // },
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Importlio - Amazon Dropshipping Bulk Product Importer & Management App",
          "url": "https://www.importlio.com"
        }
      }


           

    return (
        <BasePage
            title="Use Amazon Results & Keyword Pages to fill your Shopify Store with Products"
            subtitle="CSV, Amazon URL, or Keyword Search Importer"
            headline="Ecommerce Dropshipping"
            shadowText="Features"

        >
           <TopFeatures />
              <JsonLd json={json} />
        </BasePage>
    )
}
