"use client";
import BasePage from "@/app/components/BasePage"
import ImageCta from "@/app/components/ImageCta";
import FeatureHero from "@/app/components/FeatureHero";

import FadingBackgroundCta from '@/components/heros/FadingBackgroundCta';
import LazyLoad from "@/components/utils/LazyLoad";


import Section from '@/app/components/Section';
import Search from "@/app/components/Search";
import Link from "next/link";
import SplitWithImage from "@/components/heros/SplitWithImage";



 

function Page() {

 
  return (

    <BasePage
    theme="dark"
      headline="The #1 AI powered"
      title="Shopify Dropshipping Product Importer"
      subtitle="Gain access to millions of top-selling Amazon products, the power to import products from Amazon search results pages, category pages, keywords, and more!"
      shadowText={`Amazon Dropshipping Products`}
      customComponent={<Search />}
      // customComponent={<Link className="w-full max-w-2xl bg-button text-offwhite flex items-center justify-center rounded-lg h-input mt-2" href="/auth/register/?free=true">Start your FREE Trial</Link>}
      showSidebar={false}
      
    >
      <SplitWithImage
      dir='ltr'
        title="Import Products from Amazon Search Results"
        subtitle="No more creating massive CSV files to import products to your Shopify store!"
        paragraph={<>Import dropshipping products from Amazon search results pages, category pages, keywords & more in seconds! Fill your Shopify store with top-selling Amazon products and watch your sales skyrocket!  Simply copy & paste any Amazon URL into the Importlio Shopify App and create a massive catalog of products in seconds!</>}
        imgSrc="https://etsot7awjoe.exactdn.com/wp-content/uploads/2022/07/Importify-Design-10-1024-×-1024-px-2.png?strip=all&lossy=1&fit=800%2C800&ssl=1"
        imgAlt="Importlio Dashboard image of adding an Amazon Associates ID to your Shopify store"
        ctaLink="/auth/register/"
        ctaText="Register for FREE"
        />

<SplitWithImage
      dir='rtl'
        title="Connect your Amazon Associates Account"
        subtitle="Automatically add your Amazon Affiliate ID to all imported products"
        paragraph={`When creating a product for your Shopify store, you can automatically add your Amazon Affiliate ID to all imported products.  This allows you to earn affiliate commissions on all sales made through your Shopify store!`}
        imgSrc="https://etsot7awjoe.exactdn.com/wp-content/uploads/2022/07/Importify-Design-10-1024-×-1024-px-2.png?strip=all&lossy=1&fit=800%2C800&ssl=1"
        imgAlt="Importlio dashboard image demonstrating how to import products from Amazon search results pages"
        ctaLink="/auth/register/"
        ctaText="Start your FREE Trial"
        />
      <>
      {/* <LazyLoad
        type="video"
        dataSrc={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video.mp4`}
        src="https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video-low-res.mp4"
        width={"100%"}
        height={"100%"}
      /> */}

      <video
        muted={true}
        playsInline={true}
        autoPlay={true}
        loop={true}
        controls={false}
        className="w-full h-full">
        <source
         src="https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video.mp4"
         type="video/mp4" />
        </video>
      </>
      <Section>
        <FeatureHero />
      </Section>
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
        />
      </Section>
      <Section full>
        <FadingBackgroundCta />
      </Section>
      
    
    </BasePage>

  );
}

export default Page;