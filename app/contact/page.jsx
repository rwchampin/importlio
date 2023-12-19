"use client";

import BasePage from "@/app/components/BasePage"
import ContactForm from "@/components/forms/ContactForm"
export default function Page() {
 
  
  return (
    <BasePage
        title="Importlio - Amazon Dropshipping Product Import & Management App | Contact Us"
        subtitle="Learn how to harness the power of Amazon to fill your Shopify store with products in bulk."
        headline="Tired of manually importing products to your Shopify store?"
        shadowText="Let&apos;s Talk"
        sidebar={true}
      >


     <div className="flex flex-col-reverse gap-3 lg:flex-row overflow-hidden mx-5 rounded-xl shadow-xl">
       
     
      <div className="w-full p-5">
      
      <div className="max-w-2xl mx-auto">
      <div className="text-heading-4 mb-5">
        Find out how Importlio can help you <h3>fill your Shopify store with products in bulk from Amazon</h3>
        </div>
      <ContactForm />
      </div>
      </div>
     </div>


 
    </BasePage>
  );
}
