'use client';
import  usePreregister  from '@/hooks/use-preregister';
import { Form } from '@/components/forms';

export default function EmailForm({ className, isOpen, setIsOpen }) {
	const { 
		email,
		isLoading,
		onChange,
		onSubmit
	 } = usePreregister({
		setIsOpen,
		isOpen
	 });

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
			btnText='Preregister'
			onChange={onChange}
			onSubmit={onSubmit}
			value={email}

			postFormText={<div className={className}>Register today for a free trial of the world&apos;s first AI powered Amazon Dropshipping product importer app.  Fill your shopify store with products from amazon category pages, results pages and more!  Instantly offer thousands of products to your customers with the power of Importlio!</div>}
		/>

}
