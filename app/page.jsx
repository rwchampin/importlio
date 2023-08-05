"use client";
import dynamic from "next/dynamic";
import { BasicPage } from "@/components/pages";
import { Primary, Spinner } from "@/app/components";
import { Suspense } from "react";

import {

  FeatureHero,
  ImageCta,

} from "@/components/heros/";

import { Spacer, LazyLoad } from "@/components/utils/";
import { Section } from "@/components/common";

import { Canvas, Model, Dom } from "@react-three/fiber";

const DynamicRecentBlogPosts = dynamic(() => import("@/components/heros/RecentBlogPosts"));

const DynamicDark = dynamic(() => import("@/components/3d/Dark"));

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

const MainFeatures = () => {
 const data = [
  {
    "title": "Harness Amazon's Search Results",
    "subtitle": "Your Gateway to Trending Products",
    "description": "Discover the ultimate e-commerce advantage through our \"Import By Amazon Results Page\" feature. Seamlessly integrate Amazon's dynamic search results into your store, effortlessly importing top-trending, popular, and niche products. Stay ahead of the curve by curating an extensive range of offerings that resonate with your audience and boost sales.",
    "cta": "Uncover Success with Search"
  },
  {
    "title": "Explore Amazon Categories",
    "subtitle": "Diversify Your Catalog with Ease",
    "description": "Elevate your product lineup with the revolutionary \"Import By Amazon Category\" tool. Effortlessly import products from specific Amazon categories to diversify your inventory. Whether you're targeting a niche or aiming for comprehensive variety, this tool empowers you to seamlessly integrate products that align perfectly with your brand.",
    "cta": "Expand Your Horizon"
  },
  {
    "title": "Target with Amazon Keywords",
    "subtitle": "Precision-Driven Product Selection",
    "description": "Experience the future of e-commerce with our \"Import By Amazon Keyword\" functionality. Curate a product lineup tailored to your audience's exact needs by sourcing products based on Amazon keywords. Craft a store that caters precisely to preferences, trends, and emerging markets, ensuring your customers find exactly what they're searching for.",
    "cta": "Hit the Bullseye"
  }
]
  
  return (
    <>
    <div className="flex flex-col gap-5 md:flex-row md:items-center justify-center shrink-0">
     {data.map((item, idx) => (
       <div key={idx} className="flex flex-col flex-1 h-auto gap-1 rounded-lg shrink-0 bg-gray-3 p-3 border-2 border-gray-7 drop-shadow-xl">
       <h2 className="heading-4 uppercase smallcaps font-bold">{item.title}</h2>
        <h3 className="heading-6 text-gray-11">{item.subtitle}</h3>
       <p className="text-xxs">{item.description}</p>
        <Primary>{item.cta}</Primary>
     </div>
      ))}
  </div>
<div className="heading-6">Be the First to Access the Power of Our App! 🚀</div>

Don't miss out on a game-changing opportunity! Pre-register today to secure your spot and unlock a FREE month membership when our app launches.

🔥 Get Ready To:
✨ Harness Amazon's search results for trending products
✨ Explore and enrich your catalog with Amazon categories
✨ Target your audience with precision using Amazon keywords

Experience the future of e-commerce firsthand and give your business the competitive edge it deserves. Join our community of savvy entrepreneurs and be among the first to elevate your store's success.

Simply enter your email below and be a part of our exclusive launch!

<Primary>
  Pre-Register Now
  </Primary>

</>
    


  )
}


export default function Page() {



  return (
    <BasicPage
      bg={null}
      theme="light"
      headline="The Best AI Powered"
      title="Amazon Dropshipping Product Importer"
      subtitle={`Fill your Shopify store with Amazon products in seconds!`}
      belowSubtitle={<MainFeatures />}
      shadowText={`Amazon Products`}
      showButton={true}
      customComponent={null}
      xPos="0"
      yPos="50"
    >
      <Section full>
        {/* <Canvas camera={{ position: [0, 0, 12], fov: 50, near: 7, far: 15 }}>
          <ambientLight intensity={0.5} />
          <DynamicDark />
        </Canvas> */}

      </Section>
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
