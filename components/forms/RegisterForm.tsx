'use client';

import { useRegister } from '@/hooks';

import Form from '@/components/forms/Form';

export default function RegisterForm() {
	const {
		first_name,
		last_name,
		email,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	} = useRegister();

	const config = [
		{
			label: 'First name',
			name: 'first_name',
			type: 'text',
			value: first_name,
			required: true,
		},
		{
			label: 'Last name',
			name: 'last_name',
			type: 'text',
			value: last_name,
			required: true,
		},
		{
			label: 'Email address',
			name: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			label: 'Password',
			name: 'password',
			type: 'password',
			value: password,
			required: true,
		},
		{
			label: 'Confirm password',
			name: 're_password',
			type: 'password',
			value: re_password,
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
		/>
	);
}
