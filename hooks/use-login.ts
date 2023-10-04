
"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { setAuth, setUser, setUserEmail } from '@/redux/features/authSlice';
import { toast } from 'react-hot-toast';
import useUser from '@/hooks/useUser';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export default function useLogin() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [login, { isLoading }] = useLoginMutation<any>();
	const { data: user } = useRetrieveUserQuery();
	const [formData, setFormData] = useState({
		email: 'rwchampin@gmail.com',
		password: '1',
	});

	const { email, password } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		login({ email, password })
			.unwrap()
			.then((res):any => {
				dispatch(setAuth());
				dispatch(setUserEmail(email));
				dispatch(setUser(res.user));


				toast.success('Logged in');
				router.push('/dashboard');
			})
			.catch(() => {
				toast.error('Failed to log in');
			});
	};

	return {
		email,
		password,
		isLoading,
		onChange,
		onSubmit,
	};
}
