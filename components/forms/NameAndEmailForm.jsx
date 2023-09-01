'use client';
// import  useFullRegistration from '@/hooks/useFullRegistration';
import { Form } from '@/components/forms';


export default function EmailForm() {
	// const { 
	// 	email,
    //     first_name,
    //     last_name,
	// 	isLoading,
	// 	onChange,
	// 	onSubmit
	//  } = useFullRegistration();

	const config = [
        {
			
			labelText: 'First Name',
			labelId: 'first_name',
			type: 'text',
			// value: first_name,
			required: true,
			placeholder: 'First Name',
		
		},
        {
			
			labelText: 'Last Name',
			labelId: 'last_name',
			type: 'text',
			// value: last_name,
			required: true,
			placeholder: 'Last Name',
		
		},
		{
			
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			// value: email,
			required: true,
			placeholder: 'Email address',
		
		},
		 
	];

   
return <Form
			config={config}
			// isLoading={isLoading}
			btnText='Preregister'
			// onChange={onChange}
			// onSubmit={onSubmit}
			// value={email}
			postFormText="Early access to the world's first AI powered Amazon Dropshipping product importer app.  Fill your shopify store with products from amazon category pages, results pages and more!  Instantly offer thousands of products to your customers with the power of Importlio!"
		/>

}
