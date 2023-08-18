"use client"

import { useState, useEffect, FormEvent, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useCreatePostMutation } from '@/redux/slices/apiSlice';
import { toast } from 'react-toastify';
import Input from '@/components/forms/Input';
import { useBlog } from '@/store';
import useEmptyPost from '@/hooks/useEmptyPost';


export default async function PostForm() {
	const store = useBlog();
	const router = useRouter();
	const emptyPost = await useEmptyPost();
	const [formData, setFormData] = useState<any>(useEmptyPost());
	const [unsavedChanges, setUnsavedChanges] = useState<any>([]);

	const {
		status,
		post_type,
		headline,
		title,
		featured_image,
		subtitle,
		shadow_text,
		excerpt,
		tags,
		categories,
		content,
		seo_title,
		seo_description,
	} = formData;

	const onChange = (event: any) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });;

		
		setUnsavedChanges([...unsavedChanges, {
			[name]: value
		}]);
	}

 
   
	const config = [
		{
			data: store.postTypes,
			labelText: 'Post Type',
			labelId: 'post_type',
			type: 'select',
			value: post_type,
			onChange: onChange,
			required: true,
			placeholder: 'Post Type',
		},
		{
			labelText: 'Headline',
			labelId: 'headline',
			type: 'text',
			value: headline,
			onChange: onChange,
			required: true,
			placeholder: 'Headline',
		},

		{
			labelText: 'Title',
			labelId: 'title',
			type: 'text',
			value: title,
			onChange: onChange,
			required: true,
			placeholder: 'Title',
		},
		{
			labelText: 'Featured Image',
			labelId: 'featured_image',
			type: 'file',
			value: featured_image,
			onChange: onChange,
			required: true,
			placeholder: 'Featured Image',
		},
		{

			labelText: 'Subtitle',
			labelId: 'subtitle',
			type: 'text',
			value: subtitle,
			onChange: onChange,
			required: true,
			placeholder: 'Subtitle',
		},
		{

			labelText: 'Shadow Text',
			labelId: 'shadow_text',
			type: 'text',
			value: shadow_text,
			onChange: onChange,
			required: true,
			placeholder: 'Shadow Text',
		},
		{

			labelText: 'Excerpt',
			labelId: 'excerpt',
			type: 'textarea',
			value: excerpt,
			onChange: onChange,
			required: true,
			placeholder: 'Excerpt',
		},
		// {
		// 	data: store.tags,
		// 	labelText: 'Tags',
		// 	labelId: 'tags',
		// 	type: 'multiselect',
		// 	value: tags,
		// 	onChange: onChange,
		// 	required: true,
		// 	placeholder: 'Tags',
		// },
		// {
		// 	data: store.categories,
		// 	labelText: 'Categories',
		// 	labelId: 'categories',
		// 	type: 'multiselect',
		// 	value: categories,
		// 	onChange: onChange,
		// 	required: true,
		// 	placeholder: 'Categories',
		// },
		{
			labelText: 'Post Content',
			labelId: 'content',
			type: 'richtext',
			value: content,
			onChange: onChange,
			required: true,
			placeholder: 'Post Content',
		},
		{

			labelText: 'SEO Title',
			labelId: 'seo_title',
			type: 'text',
			value: seo_title,
			onChange: onChange,
			required: true,
			placeholder: 'SEO Title',
		},
		{

			labelText: 'SEO Description',
			labelId: 'seo_description',
			type: 'textarea',
			value: seo_description,
			onChange: onChange,
			required: true,
			placeholder: 'SEO Description',
		},

	];

	useEffect(() => {

		console.log(emptyPost)
		
	}, [emptyPost]);
	 	
	return (
		<>
		<h6>Status: 
			{status}
		</h6>
		<h6>Unsaved Changes: 
			{unsavedChanges.length}
		</h6>
		<form
			className="flex flex-col gap-y-6  w-full bg-gray-3 rounded-xl p-5 max-w-2xl"
		>

		{config.map((item, index) => {

			return (
				<Input
					key={index}
					onChange={onChange}
					data={item.data}
					value={item.value}
					placeholder={item.placeholder}
					type={item.type}
					required={item.required}

					labelId={item.labelId}
				/>
			)

		})}
		</ form>
		</>
	);
}

