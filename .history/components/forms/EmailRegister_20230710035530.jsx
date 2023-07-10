'use client';

import { useLogin } from '@/hooks';
import { Form } from '@/components/forms';

export default function LoginForm() {
	const { email, password, isLoading, onChange, onSubmit } = useLogin();

	const config = [
		{
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		} 
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Pre-register Now'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
