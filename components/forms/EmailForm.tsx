'use client';
import  usePreregister  from '@/hooks/use-preregister';

import Form from '@/components/forms/Form';

export default function EmailForm({ className }:any) {
	const { 
		email,
		isLoading,
		onChange,
		onSubmit,
		errors
	 } = usePreregister();

	const config = [
		{
			onChange,
			label: 'Email address',
			name: 'email',
			type: 'email',
			value: email,
			required: true,
			placeholder: 'Email address',
		},
		 
	];

   
return <Form
			config={config}
			isLoading={isLoading}
			btnText='Start free trial'
			onChange={onChange}
			onSubmit={onSubmit}
			preFormText={<><div className='text-[30px] text-center mt-2'>Subscribe</div><div><div className='text-xl'>Gain access to:</div> <ul className='list-disc mt-0'><li className="ml-3">free marketing tools</li><li className="ml-3">Milions of email marketing lists to send advertisements to via email</li><li className="ml-3">our Shopify Dropshipping Product Importer & Manager</li></ul></div></>}
			postFormText={<div className={className}>Register today for a free trial of the world&apos;s first AI powered Amazon Dropshipping product importer app.  Fill your shopify store with products from amazon category pages, results pages and more!  Instantly offer thousands of products to your customers with the power of Importlio!  By entering your email address above, we will use it for promotional purposes only.</div>}
			errors={errors}
		/>

}
