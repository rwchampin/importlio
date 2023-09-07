'use client';

import useLogin from '@/hooks/use-login';
import Form from '@/components/forms/Form';

import { useEffect } from 'react';

export default function LoginForm() {
	const { email, password, isLoading, onChange, onSubmit } = useLogin();

	const config = [
		{
			label: 'Email address',
			name: 'email',
			type: 'email',
			value: email,
			required: true,
			onChange: onChange,
		},
		{
			label: 'Password',
			name: 'password',
			type: 'password',
			value: password,
			onChange: onChange,
			link: {
				linkText: 'Forgot password?',
				linkUrl: '/password-reset',
			},
			required: true,
		},
	];


	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Sign in'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
