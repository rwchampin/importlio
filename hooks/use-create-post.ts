'use client';
import {useState,ChangeEvent,FormEvent} from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useCreatePostMutation } from '@/redux/features/authApiSlice';
import { createPost } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';

export default function useCreatePost() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [createPost, { isLoading }] = useCreatePostMutation();

	const [formData, setFormData] = useState({
		title: '',
    content: '',
    featured_image: '',
    post_image_1: '',
    post_image_2: '',
    post_image_3: '',
	});

	const {   title, content } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name,value}=event.target;
    debugger
    console.log(name, value);
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		createPost({ title, content })
			.unwrap()
			.then(() => {
				toast.success('Post created successfully');
				router.push('/dashboard/posts/');
			})
			.catch(() => {
				toast.error('Failed tto create Post');
			});
	};

	return {
		title,
		content,
		isLoading,
		onChange,
		onSubmit,
	};
}
