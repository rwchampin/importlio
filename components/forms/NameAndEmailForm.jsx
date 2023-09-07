'use client';
import  useFullRegistration from '@/hooks/useFullRegistration';
import Form from '@/components/forms/Form';


export default function NameAndEmailForm() {
	const { 
		email,
        first_name,
        last_name,
		isLoading,
		onChange,
		onSubmit
	 } = useFullRegistration();

	const config = [
        {
			
			label: 'First Name',
			name: 'first_name',
			type: 'text',
			value: first_name,
			required: true,
			placeholder: 'First Name',
			onChange,
		},
        {
			
			label: 'Last Name',
			name: 'last_name',
			type: 'text',
			value: last_name,
			required: true,
			placeholder: 'Last Name',
			onChange,
		},
		{
			
			label: 'Email address',
			name: 'email',
			type: 'email',
			value: email,
			required: true,
			placeholder: 'Email address',
			onChange,
		},
		 
	];

   
return <Form
			config={config}
			isLoading={isLoading}
			btnText='Preregister'
			onChange={onChange}
			onSubmit={onSubmit}
			value={email}
			postFormText="Early access to the world's first AI powered Amazon Dropshipping product importer app.  Fill your shopify store with products from amazon category pages, results pages and more!  Instantly offer thousands of products to your customers with the power of Importlio!"
		/>

}
