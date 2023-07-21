"use client";
import dynamic from "next/dynamic";
import { Lazify } from "@/components/utils";
import { useState } from "react";
import { EmailForm } from "@/components/forms";
const DynamicBasicPage: any = dynamic(
  () => import("@/components/pages/BasicPage")
);

const DynamicProducts:any = dynamic(() => import("@/components/heros/ProductHero"), {
  ssr: false,
});
const DynamicIphone:any = dynamic(() => import("@/components/heros/IphoneHero"), {
  ssr: false,
});
const DynamicVideo: any = dynamic(() => import("@/components/heros/Video"), {
  ssr: false,
});
const DynamicFeatures: any = dynamic(
  () => import("@/components/heros/Features"),
  {
    ssr: false,
  }
);
const DynamicCta: any = dynamic(() => import("@/components/heros/ImageCta"), {
  ssr: false,
});

const DynamicSpacer: any = dynamic(() => import("@/components/utils/Spacer"));
const DynamicRecentPosts: any = dynamic(
  () => import("@/components/heros/RecentBlogPosts"),
  {
    ssr: false,
  }
);


 
export default function Page() {
  const [loadForm, setLoadForm] = useState<boolean>(false);
  return (
    <div className="home">
      <DynamicBasicPage
        homepage
        headline="The Best AI Powered"
        title="Amazon Dropshipping Product Importer"
        subtitle="Bulk Import Amazon Products to Shopify in seconds!"
        shadowText={`Amazon Products`}
        cta={<EmailForm />}
      >
        {/* <DynamicIphone /> */}
        {/* <DynamicProducts /> */}
       
            <DynamicVideo src={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video.mp4`} />
         
         
        <DynamicSpacer size={1} />
       
       
          <DynamicFeatures
            title="Grow you Shopify Ecommerce Product Inventory in seconds!"
            description="Are you an Amazon seller looking to skyrocket your sales and expand
                your product catalog? Look no further! Our cutting-edge Amazon
                Product Bulk Importer is here to revolutionize the way you manage
                and import your products."
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            // cta={<EmailForm />}
          />
       
       
        <DynamicSpacer size={1} />
       
       
          <DynamicCta
            title="Import Amazon Products to Shopify in seconds!"
            description="Our Amazon Product Importer App is the best way to import Amazon products to Shopify. Our app is the only app that allows you to import Amazon products to Shopify in bulk. Our app is the only app that allows you to import Amazon products to Shopify in bulk. Our app is the only app that allows you to import Amazon products to Shopify in bulk."
            src=""
/>
       
       
        <DynamicSpacer size={1} />
       
       
          <DynamicRecentPosts />
       

        
      </DynamicBasicPage>
    </div>
  );
}
