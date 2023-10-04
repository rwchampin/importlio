"use client";

import BasePage from "@/app/components/BasePage"
// import ImageCta from "@/app/components/ImageCta";

import LazyLoad from '@/components/utils/LazyLoad'
import Form from "@/components/forms/Form";
// import Section from "@/app/components/Section";
import  useFullRegistration from "@/hooks/useFullRegistration";
export default function Page() {
  const {
    formData,
    onChange,
    onSubmit,
    isLoading,
  } = useFullRegistration()
  debugger
  const config = [
    ,{
      onChange,
      label: 'First Name',
      name: 'first_name',
			type: 'text',
      value: formData.first_name,
			required: true,
      placeholder: 'First Name',

    },{
      onChange,
			label: 'Last Name',
      name: 'last_name',
			type: 'text',
      value: formData.last_name,
			required: true,
      placeholder: 'Last Name',

    },{
      onChange,
			label: 'Email address',
			name: 'email',
			type: 'email',
			value: formData.email,
			required: true,
			placeholder: 'Email address',

    },{
      onChange,
			label: 'Message',
      name: 'message',
			type: 'textarea',
      value: formData.message,
			required: false,
      placeholder: 'Leave us a message',

    }
  ]
  return (
    <BasePage
        title="Importlio - Amazon Dropshipping Product Import & Management App | Contact Us"
        subtitle="Learn how to harness the power of Amazon to fill your Shopify store with products in bulk."
        headline="Tired of manually importing products to your Shopify store?"
        shadowText="Let&apos;s Talk"
        sidebar={true}
      >


     <div className="flex flex-col-reverse gap-3 lg:flex-row overflow-hidden mx-5 rounded-xl shadow-xl">
       
     <div className="w-full lg:w-1/2">
     <LazyLoad
              type="video"
              className="m-0 p-0 overflow-hidden object-cover w-full h-full"
              src="https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/dash-video-grey.mp4"
              dataSrc={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/dash-video.mp4`}
              alt="Shopify Amazon Dropshipping Product Importer App - Bulk import thousands of Amazon Dropshipping Products instantly!"
              />
</div>
      <div className="w-full lg:w-1/2 p-5">
      <div className="text-heading-4 mb-5">
        Find out how Importlio can help you <h3>fill your Shopify store with products in bulk from Amazon</h3>
        </div>
      <Form 
        config={config}
        submitText="Send Message"
        onSubmit={onSubmit}
        onChange={onChange}
        isLoading={isLoading}
      />
      </div>
     </div>


 
    </BasePage>
  );
}
