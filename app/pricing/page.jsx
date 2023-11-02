import BasePage from "@/app/components/BasePage";
import Section from "@/app/components/Section";
import  Prices from "@/components/heros/Prices";
import Link from "next/link";
export default function Page() {

    const Desc = () => (
       <>
        <p className="mb-2">
            Importlio is the ultimate solution for efficiently importing and managing your dropshipping products from Amazon into your shopify store. Our goal at Importlio is to help your business scale and grow by providing you with the tools you need to succeed. We offer a wide range of plans to suit your needs, including a free plan for those just starting out.
        </p>
        <p className="mb-20">
            Just starting out? No problem! We offer a Marketing service for those looking to expand their customer base by providing access to our database of over <strong>1M+</strong> customers who are actively searching for products like yours. Grow your client base and increase sales <i><b>INSTANTLY</b></i> with our Email Marketing service.  We give you access to millions of customers at the click of a button.  Take a look at our <Link href="/email-lists">Email List</Link> page for more information. 
        </p>
        </>
    );
    return (

         <BasePage
            size="md"
                title="Pricing"
                subtitle="The ultimate solution for efficiently importing and managing your dropshipping products on Amazon into your shopify store."
                headline="Pricing & Plans"
                shadowText="Plans & Pricing"

        >
            <Section className="p-5">

                <Desc />
            <Prices />

              

              


                </Section>   
          
        </BasePage>
    )
}