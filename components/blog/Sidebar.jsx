
import {Suspense} from 'react';
import {TagCloud} from '@/components/common';
import {Spacer} from '@/components/utils';
import dynamic from 'next/dynamic';
import { useBlog } from '@/store';
import { SidebarPostCardSkeleton } from '../skeletons';
const SidebarPostCard=dynamic(() => import("@/components/blog/SidebarPostCard"));



export default function Sidebar() {
	const {posts, categories,tags} = useBlog();

	return (
		<div className="sidebar bg-gray-2 p-3 sm:w-full md:max-w-[300px]   shadow-xl rounded-lg h-[calc(100vh-6rem)] flex flex-col   sticky top-[5rem]">

			<div className="flex-auto overflow-y-scroll flex flex-col gap-3">
			  {posts.map((post, idx) => {
				return (
					<Suspense key={idx} fallback={<SidebarPostCardSkeleton />}>
						<SidebarPostCard post={post} />
					</Suspense>
				)
			})}  
			<Spacer size={2} />

			<div className='text-heading-5 mb-2'>Tags</div>
			<TagCloud data={tags} className="bg-gray-300 shadow-xl" />
			<Spacer size={3} />
			<div className='text-heading-5 mb-2'>Categories</div>
			<TagCloud data={categories} className="bg-gray-300 shadow-xl" />
			</div> 
		</div>
	)
}