import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import {usePreregisterMutation} from '@/redux/slices/apiSlice';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/ui';
import { toast } from 'react-toastify';

export default function usePreRegister() {
	const router=useRouter();
	const dispatch = useAppDispatch();
	const [preregister, { isLoading }] = usePreregisterMutation();

	const [formData, setFormData] = useState({
		email: '',
	});

	const {email} = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setFormData({ "email": value });
	};

	const toggle=() => {
		dispatch(toggleModal());
	}

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = formData.email;
		preregister({ email })
			.unwrap()
			.then(() => {
				toggle()
				toast.success('Thanks for registering!');

			})
			.catch(() => {
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
