"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

import {useFullRegistrationMutation} from '@/redux/features/authApiSlice';

import { toast } from 'react-hot-toast';

export default function useFullRegistration() {


	const [fullRegister, { isLoading }] = useFullRegistrationMutation();
	const [errors, setErrors] = useState<any>([]);
	const [formData, setFormData] = useState({
		email: '',
        first_name: '',
        last_name: '',
		message: '',
	});

	const {
		email,
		first_name,
		last_name,
		message
	} = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	 

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, first_name, last_name, message } = formData;
		fullRegister({ email, first_name, last_name, message })
			.unwrap()
			.then((res) => {
				debugger
				setFormData({ "email": '', "first_name": '', "last_name": '', message: '' });
				toast.success('Thanks for registering!');

			})
			.catch((e) => {
				debugger
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
