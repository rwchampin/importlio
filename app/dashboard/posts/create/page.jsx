
import { PostForm } from '@/components/forms/'
import {
		getPost,
		getPostTypes,
		getTags,
		getCategories,
} from '@/lib/functions'

 
export default async function Page({ searchParams }) {

	const { slug } = searchParams;

	// async all
	 
	const postRes = getPost(slug);
	const postTypesRes = getPostTypes();
	const tagsRes = getTags();
	const categoriesRes = getCategories();

	const [
		tags,
		categories,
		postTypes,
		post
	 ] = await Promise.all([tagsRes, categoriesRes, postTypesRes, postRes]);
	

	return (
		<PostForm 
			post={post}
			postTypes={postTypes}
			tags={tags}
			categories={categories}
		/>

	)
}