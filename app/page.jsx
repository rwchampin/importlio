"use client";
import { BasicPage } from "@/components/pages";
import dynamic from "next/dynamic";
import Example from '@/components/marketing/sections/blog-sections/3_column_cards';
import {

  FeatureHero,
  ImageCta,
  RecentBlogPosts,

} from "@/components/heros/";

import { Spacer, LazyLoad } from "@/components/utils/";
import { Section } from "@/components/common";
import MegaDropdown from "@/components/common/Megadropdown";



 
export default function Page() {



  return (
    <BasicPage
      bg={null}
      theme="light"
      headline="The Best AI Powered"
      title="Amazon Dropshipping Product Importer"
      subtitle="Bulk Import Amazon Products to Shopify in seconds!"
      shadowText={`Amazon Products`}
      showButton={true}
      customComponent={null}
      xPos="0"
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
        <RecentBlogPosts />
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
