import dynamic from "next/dynamic";
import { EmailForm } from '@/components/forms';
export default function Home() {
    const DynamicSoon = dynamic(() => import("@/components/heros/ComingSoon"));
    const DynamicFeatures = dynamic(() => import("@/components/heros/Features"));
    const DynamicCta = dynamic(() => import("@/components/heros/ImageCta"));
    return (
        <>
            <DynamicSoon />
            
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
        </>
    );
}