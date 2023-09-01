
import PostForm  from '@/components/forms/PostForm'
import { getPost } from '@/lib/api';
export default async function Page({ params: { slug } }) {


	const post = await getPost(slug);
	console.log(post)
	return (
		<PostForm post={post} />
	)
}