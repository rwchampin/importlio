
import { 
	getRecentPosts,
	getCategories,
	getTags,

} from '@/lib/api';
// import {Suspense} from 'react';
import TagCloud from '@/app/components/TagCloud';
import {Spacer} from '@/components/utils';
import SidebarCard from './SidebarCard';
import Card from './Card';


export default async function Sidebar() {
	const postsRes = getRecentPosts();
	const categoriesRes = getCategories();
	const tagsRes = getTags();

	const [posts, categories, tags] = await Promise.all([postsRes, categoriesRes, tagsRes]);
	debugger
	return (
		<div className="sidebar bg-gray-2 p-3 overflow-y-scroll   shadow-xl rounded-lg h-[calc(100vh-6rem)] flex flex-col   sticky top-[5rem]">

			<div className="flex-auto flex flex-col gap-3">
			  {posts.map((post, idx) => {
				return (
					<SidebarCard key={idx} post={post} />
				)
			})}  
			<Spacer size={2} />


			 <TagCloud data={tags} type="tags" className="bg-gray-300 shadow-xl" />

			<TagCloud data={categories} type="categories" className="bg-gray-300 shadow-xl" /> 
			</div> 
		</div>
	)
}