"use client";

import { Canvas } from "@react-three/fiber"
import { BasicPage } from "@/components/pages";

import { Iphone } from "@/components/3d/";
import { Video } from "@/components/heros/";
import { FeatureHero } from "@/components/heros/";
import { ImageCta } from "@/components/heros/";
import { Spacer } from "@/components/utils/";
import { RecentBlogPosts } from "@/components/heros/";

import { OrbitControls, RoundedBox, Points } from "@react-three/drei";


// // import { ProductHero } from "@/components/heros/";
// const BasicPage: any = (
//   () => import("@/components/pages/BasicPage")
// );


// const MouseFollower:any = (
//   () => import("@/components/3d/MouseFollower"),
//   {
//     ssr: false,
//   }
// );
// const Products:any = (() => import("@/components/heros/ProductHero"), {
//   ssr: false,
// });
// const Iphone:any = (() => import("@/components/heros/IphoneHero"), {
//   ssr: false,
// });
// const Video: any = (() => import("@/components/heros/Video"), {
//   ssr: false,
// });
// const Features: any = (
//   () => import("@/components/heros/Features"),
//   {
//     ssr: false,
//   }
// );
// const Cta: any = (() => import("@/components/heros/ImageCta"), {
//   ssr: false,
// });

// const Spacer: any = (() => import("@/components/utils/Spacer"));
// const RecentPosts: any = (
//   () => import("@/components/heros/RecentBlogPosts"),
//   {
//     ssr: false,
//   }
// );


export default function Page() {

  return (

         <BasicPage
         theme="light"
          headline="The Best AI Powered"
          title="Amazon Dropshipping Product Importer"
          subtitle="Bulk Import Amazon Products to Shopify in seconds!"
          shadowText={`Amazon Products`}
      >     
<div className="z-100">
<Video play src={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/shopify-importer-app-video.mp4`} />
    
  </div>         
         
        <Spacer size={1} />
       
       
          <FeatureHero
             // title="Grow you Shopify Ecommerce Product Inventory in seconds!"
            // description="Are you an Amazon seller looking to skyrocket your sales and expand
            //     your product catalog? Look no further! Our cutting-edge Amazon
            //     Product Bulk Importer is here to revolutionize the way you manage
            //     and import your products."
            // image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            // cta={<EmailForm />} 
            />
       
       
        <Spacer size={1} />
       
       
          <ImageCta
          image="dfsf"
          cta="fsfs"
            title="Import Amazon Products to Shopify in seconds!"
            description="Our Amazon Product Importer App is the best way to import Amazon products to Shopify. Our app is the only app that allows you to import Amazon products to Shopify in bulk. Our app is the only app that allows you to import Amazon products to Shopify in bulk. Our app is the only app that allows you to import Amazon products to Shopify in bulk."
            />  
       
       
        <Spacer size={1} />
       
       
          {/* <RecentBlogPosts /> */}
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
