"use client";

import { BasicPage } from "@/components/pages";

import {
  Video,
  FeatureHero,
  ImageCta,
  RecentBlogPosts,
} from "@/components/heros/";
import { Spacer } from "@/components/utils/";
import { Section } from "@/components/common";

import { OrbitControls, RoundedBox, Points } from "@react-three/drei";

 
 
 
  

export default function Page() {
  return (
    <BasicPage
      theme="light"
      headline="The Best AI Powered"
      title="Amazon Dropshipping Product Importer"
      subtitle="Bulk Import Amazon Products to Shopify in seconds!"
      shadowText={`Amazon Products`}
      showButton={true}
    >
      <Section>
        <Video
          play
          src={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video.mp4`}
        />
      </Section>

      <Spacer size={1} />

      <Section className='p-5'>
        <FeatureHero />
      </Section>

      <Spacer size={1} />

      <Section className='p-5'>
        <ImageCta
          image="dfsf"
          cta="fsfs"
          title="Import Amazon Products to Shopify in seconds!"
          description="Our Amazon Product Importer App is the best way to import Amazon products to Shopify. Our app is the only app that allows you to import Amazon products to Shopify in bulk. Our app is the only app that allows you to import Amazon products to Shopify in bulk. Our app is the only app that allows you to import Amazon products to Shopify in bulk."
        />
      </Section>
      <Spacer size={1} />

      <Section className="p-5">
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
