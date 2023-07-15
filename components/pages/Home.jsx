import dynamic from "next/dynamic";
import { EmailForm } from '@/components/forms';
export default function Home() {
    const DynamicSoon = dynamic(() => import("@/components/heros/ComingSoon"));
    const DynamicFeatures = dynamic(() => import("@/components/heros/Features"));
    const DynamicCta = dynamic(() => import("@/components/heros/ImageCta"));
    const DynamicVideo = dynamic(() => import("@/components/heros/Video"));
    const DynamicSpacer = dynamic(() => import("@/components/utils/Spacer"));
    const DynamicRecentPosts = dynamic(() => import("@/components/heros/RecentBlogPosts"));

    return (
        <>
            <DynamicSoon />
            <DynamicVideo src={'https://importlio-bucket.nyc3.digitaloceanspaces.com/static/assets/shopify-importer-app-video.mp4'} />
            <DynamicSpacer size={1} />
            <DynamicFeatures />

            <DynamicCta 
                title="Grow you Shopify Ecommerce Product Inventory in seconds!"
                description="Are you an Amazon seller looking to skyrocket your sales and expand
                your product catalog? Look no further! Our cutting-edge Amazon
                Product Bulk Importer is here to revolutionize the way you manage
                and import your products."
                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                cta={<EmailForm />}
            />
            <DynamicSpacer size={1} />
            <DynamicRecentPosts />
        </>
    );
}