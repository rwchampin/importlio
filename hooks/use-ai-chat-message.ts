"use client"
import {
	useCreateChatMessageMutation
} from '@/redux/features/authApiSlice';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function useAiChatMessage() {
	const router = useRouter();
    const [createChatMessage, { isLoading }] = useCreateChatMessageMutation();

    const [formData, setFormData] = useState({
        "message": "",
        "user": "",
        "content_type": {
			"id": 11,
			"app_label": "users",
			"model": "useraccount"
		},
        "object_id": "1",
    });


	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		createChatMessage(formData)
			.unwrap()
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
