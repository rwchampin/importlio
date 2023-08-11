import {BasicPage} from "@/components/pages";

import { TopFeatures } from "@/components/heros";
import  JsonLd  from '@/components/common/JsonLd'

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
        <BasicPage
            theme="light"
            title="Use Amazon Results & Keyword Pages to fill your Shopify Store with Products"
            subtitle="CSV, Amazon URL, or Keyword Search Importer"
            headline="Ecommerce Dropshipping"
            shadowText="Features"
        belowSubtitle={null}
        showButton={false}
        customComponent={null}
        xPos="100"
        yPos="50"
        
        >
           <TopFeatures />
              <JsonLd json={json} />
        </BasicPage>
    )
}
