import { useState, ChangeEvent, FormEvent } from 'react';

import {useFullRegisterMutation} from '@/redux/slices/apiSlice';

import { toast } from 'react-toastify';

export default function useFullRegistration() {


	const [fullRegister, { isLoading }] = useFullRegisterMutation();

	const [formData, setFormData] = useState({
		email: '',
        first_name: '',
        last_name: '',
	});

	const {
		email,
		first_name,
		last_name,
	} = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	 

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, first_name, last_name } = formData;
		fullRegister({ email, first_name, last_name })
			.unwrap()
			.then(() => {

				setFormData({ "email": '', "first_name": '', "last_name": '' });
				toast.success('Thanks for registering!');

			})
			.catch(() => {
				toast.error('Failed to register account');

			});
	};

	return {
		email,
		first_name,
		last_name,
		isLoading,
		onChange,
		onSubmit,
	};
}
