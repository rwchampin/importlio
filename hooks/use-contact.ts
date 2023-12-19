
"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useSendContactMutation } from '@/redux/features/authApiSlice';



import { toast } from 'react-hot-toast';


export default function useContact() {
	const router = useRouter();
    const [sendContact, { isLoading }] = useSendContactMutation<any>();

	const [formData, setFormData] = useState({
		email: '',
        name: '',
        subject: '',
        message: '',
	});

    const { email, name, subject, message } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
        sendContact(formData)
			.unwrap()
			.then(():any => {
				toast.success('Sent Message Successfully!');

				
				router.push('/')
			})
			.catch((err) => {
				console.error(err);
				toast.error('Failed to send message');
			});
	};

	return {
        formData,
		isLoading,
		onChange,
		onSubmit,
	};
}
