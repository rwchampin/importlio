"use client"
import {
    useCreateRoomMutation
} from '@/redux/features/authApiSlice';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function useAiChat() {
	const router = useRouter();
    const [createRoom, { isLoading }] = useCreateRoomMutation();


    const [formData, setFormData] = useState({
        "name": "",
        "description": "",
        "is_active": true,
        "user": {
            id: 1,
        },
        "assistant": {
            id: 1,
        },
        "messages": []
    });



	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
        debugger
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
        debugger
		createRoom(formData)
			.unwrap()
			.then(() => {
				toast.success('Created room successfully');
				router.push('/dashboard/ai')
			})
			.catch(() => {
				toast.error('Failed to create room');
			});
	};

	return {
		formData,
		isLoading,
		onChange,
		onSubmit,
	};
}
