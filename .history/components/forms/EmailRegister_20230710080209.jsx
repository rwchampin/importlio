'use client';

import { useLogin } from '@/hooks';
import { Form } from '@/components/forms';

export default function LoginForm() {
	const { email, password, isLoading, onChange, onSubmit } = useLogin();

	const config = [
		{
			labelText: '',
			labelId: '',
			type: 'email',
			value: email,
			required: true,
		} 
	];

	return (
           <div className="w-full max-w-lg mx-auto">
            <Form
                config={config}
                isLoading={isLoading}
                btnText='Pre-register Now'
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </div>
	);
}
