"use client";

import { BasicPage } from "@/components/pages";
import {
  RecentBlogPosts,
  FeatureHero,
  ImageCta,
 
} from "@/components/heros/";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Iphone } from "@/components/3d";
import  FadingBackgroundCta from '@/components/heros/FadingBackgroundCta';
import { Spacer, LazyLoad } from "@/components/utils/";
import { Section, Modal, JsonLd } from "@/components/common";

import NameAndEmailForm from "@/components/forms/NameAndEmailForm";
// import { useEffect } from "react";

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  "name": "Importlio - Amazon Dropshipping Product Importer & Management App",
  "url": "https://www.importlio.com",
  "description": "Import Amazon dropshipping products with your Amazon Affiliate/Associate ID attached to product links to guarantee you get paid for every sale.  Import Products from Amazon URL by result pages, category listing pages, or any other amazon page.  Provide a search result URL to our import tool and instantly fill your store with thousands of products to begin seling today!  Import Amazon products to Shopify in bulk.  Import Amazon products to WooCommerce in bulk.  Import Amazon products to BigCommerce in bulk.  Import Amazon products to Wix in bulk.  Import Amazon products to Squarespace in bulk.  Import Amazon products to Weebly in bulk.  Import Amazon products to Ecwid in bulk.  Import Amazon products to Etsy in bulk.  Import Amazon products to eBay in bulk.  Import Amazon products to Magento in bulk.  Import Amazon products to PrestaShop in bulk.  Import Amazon products to Volusion in bulk.  Import Amazon products to 3dcart in bulk.  Import Amazon products to Big Cartel in bulk.  Import Amazon products to OpenCart in bulk.  Import Amazon products to PinnacleCart in bulk.  Import Amazon products to SalesForce in bulk.",
  "publisher": {
    "@type": "Organization",
    "name": "Importlio Inc.",
    "url": "https://www.importlio.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/logo-black.svg",
    }
  },
  "applicationCategory": "Ecommerce",
  "applicationSubCategory": "Product Management",
  "softwareVersion": "1.0.0",
  "operatingSystem": "Cross-Platform",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD",
    "availability": "http://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Importlio Inc.",
      "url": "https://www.importlio.com"
    }
  }
}



  const Prereg = () => {
    return (
      <>
      <div className="mb-5 font-montserrat text-md leading-relaxed" style={{fontWeight: 300}}>
      Pre-register today and secure a FREE month&apos;s membership when we launch. Join now to import products in BULK from the best-sellers on Amazon.  Use Amazon search results pages, Category pages and more!  Don&apos;t miss out - be part of the elite Shopify Store Owners with shops FILLED with products!
      </div>

      <Modal />
      </>  
    )
  }
 

export default function Page() {

  return (
    <BasicPage
      bg={null}
      theme="light"
      headline="The Official Shopify"
      title="Amazon Dropshipping Product Importer"
      subtitle={`Official Shopify Bulk Product Importer App`}
      belowSubtitle={<Prereg />}
      shadowText={`Amazon Products`}
      showButton={false}
      customComponent={null}
      xPos="100"
      yPos="50"
    >
     
      <Section
        full
      >
        <LazyLoad
          type="video"
          dataSrc={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video.mp4`}
          src="https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video-low-res.mp4"
          width={"100%"}
          height={"100%"}
        />
      </Section>

      <Spacer size={1} />

      <Section>
        <FeatureHero />
      </Section>

      <Spacer size={1} />

  
      <Section>
        <ImageCta
          title="Fill your Shopify Store with Amazon Search Results Pages"
          description={`No other app allows you to import products from Amazon search results pages, category pages, keywords, and more!  Import products from Amazon in bulk to your Shopify store with the Importlio Shopify App. Import Amazon Dropshopping Products to Shopify in bulk by:\n
           <ul>
          <li>&bull; Amazon Search Results Page URL</li>
          <li>&bull; Amazon Category Page URL</li>
          <li>&bull; Amazon Keyword Search</li>
          <li>&bull; Amazon Product ASIN</li>
          <li>&bull; Amazon Product URL</li>
          </ul>`}
          cta={<NameAndEmailForm />}
        />
      </Section>
      <Spacer size={1} />

      
      <Section full>
     <FadingBackgroundCta />
      </Section>

      <Spacer size={1} />

        <Section>
          <RecentBlogPosts />
        </Section>

        <JsonLd 
          json={jsonLd}
        />
      {/* <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-red-500">
            <Canvas
              camera={{ position: [0, 0, .3] }}
            >
              // {/* <OrbitControls /> */}
              {/* // <ambientLight intensity={0.5} /> */}
              {/* // <Iphone /> */}
                 
            {/* </Canvas> */}
          {/* </div>  */}
    </BasicPage>
  );
}
