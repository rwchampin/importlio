"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUpdatePostMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

export default function useEditPost(post: any) {
	const router = useRouter();
	const [updatePost, { isLoading }] = useUpdatePostMutation();

	const [formData, setFormData] = useState(post);
	const [newChanges, setNewChanges] = useState({} as any);
	const [isDirty, setIsDirty] = useState(false);
	const [saveTimeout, setSaveTimeout] = useState<number | null>(null);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));

		// Track new changes
		setNewChanges((prevChanges: any) => ({
			...prevChanges,
			[name]: value,
		}));

		setIsDirty(true);

		// Clear the existing timeout and set a new one
		if (saveTimeout) {
			clearTimeout(saveTimeout);
		}
		const newTimeout = window.setTimeout(() => {
			saveFormData();
		}, 5000);
		setSaveTimeout(newTimeout);
	};

	const saveFormData = () => {
		if (isDirty) {
			updatePost({id: post.id, updates:newChanges})
				.unwrap()
				.then(() => {
					toast.success('Post Saved Successfully');
					setIsDirty(false);
					setNewChanges({}); // Clear new changes after saving
				})
				.catch(() => {
					toast.error('Failed to save post');
				});
		}
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		saveFormData(); // Save the data immediately before submitting the form

		// ... (other form submission logic)
	};

	useEffect(() => {
		// Clear the timeout when the component unmounts
		return () => {
			if (saveTimeout) {
				clearTimeout(saveTimeout);
			}
		};
	}, [saveTimeout]);

	return {
		formData,
		isLoading,
		onChange,
		onSubmit,
	};
}
