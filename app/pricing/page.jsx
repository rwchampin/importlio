import BasePage from "@/app/components/BasePage";
import Section from "@/app/components/Section";
import  Prices from "@/components/heros/Prices";
export default function Page() {

    return (

         <BasePage
                title="Subscription Pricing"
                subtitle="The ultimate solution for efficiently importing and managing your dropshipping products on Amazon into your shopify store."
                headline="Pricing & Plans"
                shadowText="Plans & Pricing"

        >
            <Section className="p-5">
            <Prices />

                <p>Join over 10,000 successful store owners who have placed their trust in Importlio and witness a significant boost in sales for your business. Start your free trial today with no credit card required, and experience the transformative power of our comprehensive eCommerce importer app.</p>

                <p>Importlio is the preferred choice for ambitious entrepreneurs in the eCommerce industry, offering a wide range of benefits to help you scale your business and achieve unparalleled success. With our powerful importer app, you gain access to:</p>
               

              


                </Section>   
          
        </BasePage>
    )
}