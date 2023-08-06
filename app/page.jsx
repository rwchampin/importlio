"use client";
import dynamic from "next/dynamic";
import { BasicPage } from "@/components/pages";
import { Spinner, Primary } from "@/app/components";
import { Suspense } from "react";

import {

  FeatureHero,
  ImageCta,
  TopFeatures
} from "@/components/heros/";

import { Spacer, LazyLoad } from "@/components/utils/";
import { Section } from "@/components/common";

import { Canvas, Model, Dom } from "@react-three/fiber";

const DynamicRecentBlogPosts = dynamic(() => import("@/components/heros/RecentBlogPosts"));


const jsonLd = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  "name": "Importlio - Amazon Dropshipping Bulk Product Importer & Management App",
  "url": "https://www.importlio.com",
  "description": "Import Amazon dropshipping products with you Amazon Affiliate/associate ID attached to product links to guarantee you get paid for every sale.  Import Products from Amazon by category, tag, or keyword.  Provide a search result URL to our import tool and instantly fill your store with thousands of products to begin seling today!  Import Amazon products to Shopify in bulk.  Import Amazon products to WooCommerce in bulk.  Import Amazon products to BigCommerce in bulk.  Import Amazon products to Wix in bulk.  Import Amazon products to Squarespace in bulk.  Import Amazon products to Weebly in bulk.  Import Amazon products to Ecwid in bulk.  Import Amazon products to Etsy in bulk.  Import Amazon products to eBay in bulk.  Import Amazon products to Magento in bulk.  Import Amazon products to PrestaShop in bulk.  Import Amazon products to Volusion in bulk.  Import Amazon products to 3dcart in bulk.  Import Amazon products to Big Cartel in bulk.  Import Amazon products to OpenCart in bulk.  Import Amazon products to PinnacleCart in bulk.  Import Amazon products to SalesForce in bulk.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.importlio.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Importlio Inc.",
    "url": "https://www.importlio.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/logo-black.svg",
      "width": 600,
      "height": 200
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
      <div className="max-w-2xl">
      Pre-register today and secure a FREE month&apos;s membership when we launch. Join now to import products in BULK from the best-sellers on Amazon.  Use Amazon search results pages, Category pages and more!  Don&apos;t miss out - be part of the elite Shopify Store Owners with shops FILLED with products!
      </div>
      <Primary className="max-w-md mt-5">PREREGISTER</Primary>
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
          image="dfsf"
          cta="fsfs"
          title="Import Amazon Products to Shopify in seconds!"
          description="Our Amazon Product Importer App is the best way to import Amazon products to Shopify. Our app is the only app that allows you to import Amazon products to Shopify in bulk. Our app is the only app that allows you to import Amazon products to Shopify in bulk. Our app is the only app that allows you to import Amazon products to Shopify in bulk."
        />
      </Section>
      <Spacer size={1} />

      <Section>

        <Suspense fallback={<Spinner />}>
          <DynamicRecentBlogPosts />
        </Suspense>


      </Section>
      {/* <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-red-500">
            <Canvas>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Iphone />
                <mesh>
                  <sphereGeometry args={[10, 32, 32]} />
                  <meshStandardMaterial color="hotpink" />


                </mesh>
            </Canvas>
          </div> */}
    </BasicPage>
  );
}
