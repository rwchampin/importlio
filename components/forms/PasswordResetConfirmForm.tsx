'use client';

import { useResetPasswordConfirm } from '@/hooks';

import Form from '@/components/forms/Form';

interface Props {
	uid: string;
	token: string;
}

export default function PasswordResetConfirmForm({ uid, token }: Props) {
	const { new_password, re_new_password, isLoading, onChange, onSubmit } =
		useResetPasswordConfirm(uid, token);

	const config = [
		{
			label: 'New password',
			name: 'new_password',
			type: 'password',
			onChange,
			value: new_password,
			required: true,
		},
		{
			label: 'Confirm new password',
			name: 're_new_password',
			type: 'password',
			onChange,
			value: re_new_password,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Request password reset'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
