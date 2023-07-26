"use client";

import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {Spacer} from '@/components/utils';
import {Primary, SocialShareButtons, TagCloud, Likes} from '@/components/common';
export default function PostCard({ post }) {
	const [hover, setHover]=useState(false);
	const maxLength=200;

	function truncateString(str, maxLength) {
		if(str.length<=maxLength) {
			return str;
		}

		return str.slice(0, maxLength)+'...';
	}


	return (
		<article
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={`rounded-lg recent-post w-full h-[100%] overflow-hidden flex gap-5 flex-col justify-start `}
		>
			<div className='relative aspect-square' >
				<Image
					className='aspect-square m-0 mt-0 not-prose rounded-xl'
					fill
					src={post.featured_image}
					alt="Shopify Amazon Dropshipping Product Importer App - Bulk import thousands of Amazon Dropshipping Products instantly!"
				/>

				{/* <SocialShareButtons
					show={hover}
					className='absolute bottom-0 right-0'
					url={`https://importlio.com/ecommerce-tutorials/${post.slug}`}
					title={post.title}
					summary={post.content}
				/> */}

			</div>
			<div className="overflow-hidden min-h-[50%] p-5 rounded-xl bg-gray-200  shadow-2xl">
				<div className='flex flex-col justify-between h-[100%]'>
					<div>
						<div className='font-bold text-xs text-gray-500 flex justify-between'>
							<time dateTime={post.updated}>{post.updated}</time>
							<TagCloud data={[post.post_type]} className={'bg-gray-500 text-offwhite shadow-xl'} />
							<span>{post.readtime} read</span></div>
						<Link
							key={Math.random() + '-link'}
							href={`/ecommerce-tutorials/${post.slug}`}

						>
							<h4 className='break-words whitespace-break-spaces text-heading-4 not-prose leading-7'>{post.title}</h4>
						</Link>
						<Spacer size={1} />
						<p className='text-sm'>{truncateString(post.content, maxLength)}</p>
					</div>

				 	<TagCloud data={post.tags} className="bg-gray-300 shadow-xl" />

			 		{/* <Likes likes={post.likes} /> */}
					<Spacer size={2} />

					  <Primary
						key={post.slug + '-button'}
					href={`/ecommerce-tutorials/${post.slug}`}
				>READ MORE</Primary> 

				</div>
			</div>


		 
		</article>
	)
}