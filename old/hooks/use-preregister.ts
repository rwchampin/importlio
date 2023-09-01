import { useState, ChangeEvent, FormEvent } from 'react';
import { useModal } from '@/store';
import {usePreregisterMutation} from '@/old/utils/redux/features/authApiSlice';

// import { useModal } from '@/store';
import { toast } from 'react-toastify';

export default function usePreRegister() {
	const { toggleModal,hideModal, isOpen } = useModal();

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
				hideModal()
				setFormData({ "email": '' });
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
