
import EditPostForm from '@/components/forms/EditPostForm'
import {
		getPost,
} from '@/lib/functions'

export default async function Page({ slug }) {



	// async all
	 
	const post = await getPost(slug);

	

	return (
		<EditPostForm 
			post={post}
		/>

	)
}