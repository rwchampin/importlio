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
		onSubmit,
		errors
	 } = useFullRegistration();

	const config = [
        
		{
			
			label: 'Email address',
			name: 'email',
			type: 'email',
			value: email,
			required: true,
			placeholder: 'Email address',

			onChange,
		},
		{
			
			label: 'First Name',
			name: 'first_name',
			type: 'text',
			value: first_name,
			required: false,
			placeholder: 'First Name',

			onChange,
		},
        {
			
			label: 'Last Name',
			name: 'last_name',
			type: 'text',
			value: last_name,
			required: false,
			placeholder: 'Last Name',
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
			errors={errors}
		/>

}
