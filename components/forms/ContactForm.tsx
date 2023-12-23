'use client';



import useContact from '@/hooks/use-contact';

import Form from '@/components/forms/Form';

export default function ContactForm() {
	const { formData,isLoading, onChange, onSubmit } = useContact();

	const config = [
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            value: formData.name,
            required: true,
            onChange: onChange,
        },
		{
			label: 'Email address',
			name: 'email',
			type: 'email',
			value: formData.email,
			required: true,
			onChange: onChange,
		},
		{
			label: 'Subject',
            name: 'subject',
            type: 'text',
            value: formData.subject,
            required: true,
            onChange: onChange,
		},{
            label: 'Message',
            name: 'message',
            type: 'text',
            value: formData.message,
            required: true,
            onChange: onChange,
        }
	];


	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Submit'
			onChange={onChange}
			onSubmit={onSubmit}
			formType='contact'
		/>
	);
}
