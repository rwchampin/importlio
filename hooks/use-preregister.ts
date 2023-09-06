import { useState, ChangeEvent, FormEvent } from 'react';

import {usePreregisterMutation} from '@/redux/features/authApiSlice';

// import { useModal } from '@/store';
import { toast } from 'react-toastify';
import { set } from 'cypress/types/lodash';

export default function usePreRegister({
	isOpen,
	setIsOpen,
}) {

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
				debugger
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
