"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-hot-toast';

export default function useRegister() {
	const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();

	const [formData, setFormData] = useState({
		"first_name": "",
		"last_name": "",
		"email": "",
		"password": "",
		"re_password": "",
	});



	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		register(formData)
			.unwrap()
			.then(() => {
				router.push('/auth/verify-account');
			})
			.catch(() => {
				toast.error('Failed to register account');
			});
	};

	return {
		formData,
		isLoading,
		onChange,
		onSubmit,
	};
}
