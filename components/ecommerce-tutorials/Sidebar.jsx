
import {Suspense} from 'react';
import {TagCloud} from '@/components/common';
import {Spacer} from '@/components/utils';
import dynamic from 'next/dynamic';

const SidebarPostCard=dynamic(() => import("@/components/ecommerce-tutorials/SidebarPostCard"));

async function getTags() {
	const res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/list`)
	return res.json()
}

async function getCategories() {
	const res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/list`)
	return res.json()
}

async function getPosts() {
	const res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`)
	debugger
	return res.json()
}

export default async function Sidebar() {

	// Initiate both requests in parallel
	const categoriesData=getCategories()
	const tagsData=getTags()
	const postData=getPosts()
	const [ postJson, tags, categories ]=await Promise.all([ postData, categoriesData, tagsData ])
	const posts= await postJson.results;

	return (
		<div className="sidebar w-full h-[calc(100vh-4rem)] flex flex-col   bg-gray3 shadow-xl   rounded-lg sticky top-[5rem]">
			
			

			<div className="flex-auto overflow-y-scroll flex flex-col gap-3">
			  {posts.map((post, idx) => {
				return (
					<Suspense key={idx} fallback={<div>loading...</div>}>
						<SidebarPostCard post={post} />
					</Suspense>
				)
			})}  
			<Spacer size={2} />

			<div className='text-heading-5 mb-2'>Tags</div>
			{tags.length&&<TagCloud data={tags} className="bg-gray-300 shadow-xl" />}
			<Spacer size={3} />
			<div className='text-heading-5 mb-2'>Categories</div>
			{categories.length&&<TagCloud data={categories} className="bg-gray-300 shadow-xl" />}
			</div>
		</div>
	)
}