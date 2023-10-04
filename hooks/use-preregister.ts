"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

import {usePreregisterMutation} from '@/redux/features/authApiSlice';
import useModal from '@/hooks/useModal';
 

import { toast } from 'react-hot-toast';


export default function usePreRegister() {
	 const { isOpen, close } = useModal();
	const [preregister, { isLoading }] = usePreregisterMutation();
	const [errors, setErrors] = useState<any>([]);
	const [formData, setFormData] = useState({
		email: '',
	});

	const {email} = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setFormData({ "email": value });
	};

	const onSuccess = () => {
		setErrors([]);
		setFormData({ "email": '' });
				toast.success('Thanks for registering!');
			 if(isOpen){
				 close()
			 }
	}
	 
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = formData.email;

		preregister({ email })
			.unwrap()
			.then(() => {
				
				onSuccess()
				
			})
			.catch((e) => {
				toast.error('Failed to register account');
				setErrors(e.data);
			});
	};

	return {
		email,
		isLoading,
		onChange,
		onSubmit,
		errors,
	};
}
