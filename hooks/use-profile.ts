"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-hot-toast';

import { userProfileFields } from '@/lib/constants';

export default function useProfile(user: any) {
	const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();
    
	const [formData, setFormData] = useState(userProfileFields);
    
    formData.first_name = user.first_name;
    formData.last_name = user.last_name;
    formData.email = user.email;
    formData.avatar = user.avatar;
    formData.password = user.password;
    formData.re_password = user.re_password;
    formData.amazon_associate_id = user.amazon_associate_id;
    formData.address = user.address;
    formData.city = user.city;
    formData.state = user.state;
    // formData.country = user.country;
    formData.tz = user.tz;


	const { first_name, last_name, email, password, re_password } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		register({ first_name, last_name, email, password, re_password })
			.unwrap()
			.then(() => {
				toast.success('Please check email to verify account');
				router.push('/auth/login');
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
