
import Image from 'next/image';
import {TagCloud} from '@/components/common';

async function getTags() {
	const res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/`)
	return res.json()
}

async function getCategories() {
	const res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/`)
	return res.json()
}

export default async function Sidebar({posts}) {

	// Initiate both requests in parallel
	const categoriesData=getCategories()
	const tagsData=getTags()

	const [ tags, categories ]=await Promise.all([ categoriesData, tagsData ])


	return (
		<div className="flex flex-col gap-5">
			{posts.map((post, idx) => {

				return (
					<div key={idx} className="flex gap-1 rounded-lg shadow-xl bg-offwhite overflow-hidden">
						<div className='rounded-lg w-1/3 h-fill aspect-square relative bg-blue-100'>
							<Image
								src={post.featured_image}
								alt="Shopify Amazon Dropshipping Product Importer App - Bulk import thousands of Amazon Dropshipping Products instantly!"
								fill
								className='not-prose m-0 absolute left-0 top-0'
							/>
						</div>
						<div className='flex w-2/3 flex-col gap-1 p-2'>
							<div className='text-xxxs text-gray-500'>{post.updated}</div>
							<div className='text-heading-6 line-clamp-1'>{post.title}</div>
							<div className='text-xxs line-clamp-2'>{post.content}</div>
							<TagCloud data={[ {name: "test things"} ]} className={'bg-gray-500 text-xxxs px-1.5 text-offwhite shadow-xl'} />
						</div>
						
					</div>
				)
			})}
			{tags.length&&<TagCloud data={tags} className="bg-gray-300 shadow-xl" />}
			{categories.length&&<TagCloud data={categories} className="bg-gray-300 shadow-xl" />}
		</div>
	)
}