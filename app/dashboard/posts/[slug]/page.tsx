
import PostForm  from '@/components/forms/PostForm'
import { getPost } from '@/lib/api';
export default async function Page({ params: { slug } }:any) {


	const post = await getPost(slug);

	return (
		<PostForm post={post} />
	)
}