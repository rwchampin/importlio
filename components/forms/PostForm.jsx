import {Form} from '@/components/forms';
import {useCreatePost} from '@/hooks';

export default function PostForm() {
	const {
		title,
		content,

		featured_image,
		tags,
		categories,
		post_image_1,
		post_image_2,
		post_image_3,
		post_type,

		isLoading,
		onChange,
		onSubmit
	}=useCreatePost();

	const config = [
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
			required: false,
			placeholder: 'Image',
		},
		{
			labelText: 'Post Image 1',
			labelId: 'post_image_1',
			type: 'file',
			value: post_image_1,
			required: false,
			placeholder: 'Image',
		},
		{
			labelText: 'Post Image 2',
			labelId: 'post_image_2',
			type: 'file',
			value: post_image_2,
			required: false,
			placeholder: 'Image',
		},
		{
			labelText: 'Post Image 3',
			labelId: 'post_image_3',
			type: 'file',
			value: post_image_3,
			required: false,
			placeholder: 'Image',
		},
		{
			labelText: 'Tags',
			labelId: 'tags',
			type: 'text',
			value: tags,
			required: false,
			placeholder: 'Tags',
		},
		{
			labelText: 'Categories',
			labelId: 'Categories',
			type: 'multiselect',
			value: categories,
			required: false,
			placeholder: 'Categories',
		},
		{
			labelText: 'Post Content',
			labelId: 'content',
			type: 'textarea',
			value: content,
			onChange: onChange,
			required: true,
			placeholder: 'Post Content',
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