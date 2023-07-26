'use client';
import { usePreregister } from '@/hooks';
import { Form } from '@/components/forms';

export default function EmailForm() {
	const { 
		email,
		isLoading,
		onChange,
		onSubmit
	 } = usePreregister();

	const config = [
		{
			
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
			placeholder: 'Email address',
		
		},
		 
	];

   
return <Form
			config={config}
			isLoading={isLoading}
			btnText='Pre-register'
			onChange={onChange}
			onSubmit={onSubmit}
			postFormText="Register today for a free trial of the world&apos;s first AI powered Amazon Dropshipping product importer app.  Fill your shopify store with products from amazon category pages, results pages and more!  Instantly offer thousands of products to your customers with the power of Importlio!"
		/>

}
