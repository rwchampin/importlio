"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

import {usePreregisterMutation} from '@/redux/features/authApiSlice';


import { toast } from 'react-toastify';


export default function usePreRegister({
	setIsOpen,
}:any) {

	const [preregister, { isLoading }] = usePreregisterMutation();

	const [formData, setFormData] = useState({
		email: '',
	});

	const {email} = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setFormData({ "email": value });
	};

	 

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = formData.email;
		preregister({ email })
			.unwrap()
			.then(() => {
				setIsOpen(false);
				setFormData({ "email": '' });
				toast.success('Thanks for registering!');

			})
			.catch((e) => {
				toast.error('Failed to register account');

			});
	};

	return {
		email,
		isLoading,
		onChange,
		onSubmit,
	};
}
