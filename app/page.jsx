"use client";
import BasePage from "@/app/components/BasePage"
import ImageCta from "@/app/components/ImageCta";
import FeatureHero from "@/app/components/FeatureHero";

import FadingBackgroundCta from '@/components/heros/FadingBackgroundCta';
import LazyLoad from "@/components/utils/LazyLoad";


import Section from '@/app/components/Section';
import Search from "@/app/components/Search";



 
const Prereg = () => {

  return (
    <>
     <Search />
      <div className="max-w-2xl mb-3 mt-3  font-montserrat text-xxs leading-tight" style={{ fontWeight: 500 }}>
        Pre-register today and secure a FREE month&apos;s membership. Join now to import products in BULK from the best-sellers on Amazon.  Use Amazon search results pages, Category pages and more!  Don&apos;t miss out - be part of the elite Shopify Store Owners with shops FILLED with products!
      </div>
      </>

    

     

  )
}

function Page( ) {
  // showNotification("Welcome to Importlio!", "success");
  return (

    <BasePage
    theme="dark"
      headline="The Official"
      title="Amazon Dropshipping Bulk Product Importer App for Shopify"
      subtitle={`Import Amazon Products to Shopify in Bulk with Amazon Result Pages, Category Pages, Keywords, ASINs, and more!`}
      shadowText={`Amazon Dropshipping Products`}
      // customComponent={<Search />}
      customComponent={<Prereg />}
      showSidebar={false}
      
    >
      <>
      <LazyLoad
        type="video"
        dataSrc={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video.mp4`}
        src="https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video-low-res.mp4"
        width={"100%"}
        height={"100%"}
      />
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