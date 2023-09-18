'use client';

import { useRegister } from '@/hooks';

import Form from '@/components/forms/Form';

export default function RegisterForm() {
	const {
		first_name,
		last_name,
		email,
		password,
		avatar,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	}:any = useRegister();

	const config = [
		{
			label: 'Avatar',
			name: 'avatar',
			type: 'file',
			value: avatar,
			required: true,
			description: 'Upload a profile picture',
		},
		{
			label: 'First name',
			name: 'first_name',
			type: 'text',
			value: first_name,
			required: true,
			errorMessage: 'First name is required',
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
			errorMessage: 'Email is required',
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
