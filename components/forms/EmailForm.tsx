'use client';
import  usePreRegister  from '@/hooks/use-preregister';

import Ul from '@/app/components/Ul';
import Form from '@/components/forms/Form';


const List = () => {
	const l = [
		'free marketing tools',
		'Milions of email marketing lists to send advertisements to via email',
		'our Shopify Dropshipping Product Importer & Manager'
	]
	return (
		<Ul
			title='Gain access to Millions of Amazon Dropshipping Products, Unlimited Email Marketing Lists & More!'
		 listItems={l}
		  />
	)
}
export default function EmailForm({ className }:any) {
	const { 
		email,
		isLoading,
		onChange,
		onSubmit,
		errors
	 } = usePreRegister();

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
			preFormText={<List />}
			postFormText={<div className={className}>Register today for a free trial of the world&apos;s first AI powered Amazon Dropshipping product importer app.  Fill your shopify store with products from amazon category pages, results pages and more!  Instantly offer thousands of products to your customers with the power of Importlio!  By entering your email address above, we will use it for promotional purposes only.</div>}
			errors={errors}
		/>

}
