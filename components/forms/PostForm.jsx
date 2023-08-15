"use client"
import Form from './Form';
import {useCreatePost} from '@/hooks';
import { useBlog } from '@/store';
export default function PostForm() {
	const store = useBlog();

	const {
		headline,
		subtitle,
		shadow_text,
		excerpt,
		seo_description,
		seo_title,

		title,
		content,

		post_type,
		featured_image,
		post_image_1,
		post_image_2,
		post_image_3,
		tags,
		categories,
		isLoading,
		onChange,
		onSubmit
	}=useCreatePost();

	const config=[
		 
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
		{
			data: store.tags,
			labelText: 'Tags',
			labelId: 'tags',
			type: 'multiselect',
			value: tags,
			onChange: onChange,
			required: true,
			placeholder: 'Tags',
		},
		{
			data: store.categories,
			labelText: 'Categories',
			labelId: 'categories',
			type: 'multiselect',
			value: categories,
			onChange: onChange,
			required: true,
			placeholder: 'Categories',
		},
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

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Create Post'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
