'use client';

import { useRegister } from '@/hooks';
import Form from '@/components/forms/Form';

export default function RegisterForm() {
	const {
		formData,
		isLoading,
		onChange,
		onSubmit,
	}:any = useRegister();

	const config = [
		
		{
			label: 'First name',
			name: 'first_name',
			type: 'text',
			value: formData.first_name,
			required: true,
			placeholder: 'John',
			errorMessage: 'First name is required',
		},
		{
			label: 'Last name',
			name: 'last_name',
			type: 'text',
			value: formData.last_name,
			placeholder: 'Smith',
			required: true,
		},
		{
			label: 'Email address',
			name: 'email',
			type: 'email',
			value: formData.email,
			required: true,
			errorMessage: 'Email is required',
		},
		{
			label: 'Password',
			name: 'password',
			type: 'password',
			value: formData.password,
			required: true,
		},
		{
			label: 'Confirm password',
			name: 're_password',
			type: 'password',
			value: formData.re_password,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Sign up'
			onChange={onChange}
			onSubmit={onSubmit}
			formType='register'
		/>
	);
}
