import Image from 'next/image';
import Link from 'next/link';
export default function SidebarPostCard({post}) {
	const maxLength=200;
	function truncateString(str, maxLength) {
		if(!str) return;
		if(str.length<=maxLength) {
			return str;
		}

		return str.slice(0, maxLength)+'...';
	}
	return (
		<Link href={"/"} className="w-full flex-shrink-0 flex rounded-lg shadow-xl bg-offwhite overflow-hidden">
			  <div className='rounded-lg w-1/3 h-fill aspect-square relative bg-blue-100'>
				<Image
					src={post.featured_image}
					alt="Shopify Amazon Dropshipping Product Importer App - Bulk import thousands of Amazon Dropshipping Products instantly!"
					fill
					className='not-prose m-0 absolute left-0 top-0'
				/>
			</div>
			<div className='flex w-2/3 flex-col gap-1 p-2'>
				<div className='text-xxxs text-gray-500'>{post.published}</div>
				<div className='text-heading-6 line-clamp-1'>{post.title}</div>
				<div className='text-xxs line-clamp-4 p-0 no-padding' dangerouslySetInnerHTML={{__html: post.content}} />

			</div>  

		</Link>
	)
}