"use client";
import {Panel} from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {Spacer} from '@/components/utils';
import {Primary} from '@/components/common/buttons';
export default function PostCard({post}) {
	const maxLength=200;

	function truncateString(str, maxLength) {
		if(str.length<=maxLength) {
			return str;
		}

		return str.slice(0, maxLength)+'...';
	}


	return (
		<Panel round className={`self-stretch recent-post w-full h-[100%] overflow-hidden flex flex-col justify-start bg-blue-400`}>
			<div className='relative bg-red-100 aspect-square'>
				<Image className='aspect-square m-0 mt-0 not-prose' fill src={post.featured_image} alt="Shopify Amazon Dropshipping Product Importer App - Bulk import thousands of Amazon Dropshipping Products instantly!" />
			</div>
			<div className="min-h-[50%] p-5">
				<div className='flex flex-col justify-between h-[100%]'>
					<div>
					<div className='font-bold text-xs text-gray-500 flex justify-between'><span>{post.published_at}</span> <span>{post.readtime} read</span></div>
						<Link
							href={`/ecommerce-tutorials/${post.slug}`}

						>
							<h4 className='break-words whitespace-break-spaces text-heading-4 not-prose leading-7'>{post.title}</h4>
						</Link>
					<Spacer size={1} />
					<p className='text-sm'>{truncateString(post.content, maxLength)}</p>
					</div>
					{/* {post.tags.length>0&&(
					<>
						<div className='flex items-center justify-between text-xs font-bold font-montserrat'>
							Post Tags:
						</div>
						<div>
							{post.tags.length&&post.tags.map((tag, idx) => {
								return (
									<span key={idx} className="text-xs text-black underline font-bold font-apercu">{tag} {post.tags.length-1!==idx? ',':''}</span>
								)
							})}
						</div>
					</>)} */}

					{/* {post.categories.length>0&&(<div>{post.categories.map((cat, idx) => {
					return (
						<span key={idx} className="text-xs font-bold text-white bg-gray-500 rounded-lg p-1">{cat} {post.categories.length-1!==idx? ',':''}</span>
					)
				})} */}
					{/* </div>
				)} */}
					<div>


					<Primary
						href={`/ecommerce-tutorials/${post.slug}`}
						>READ MORE</Primary>
					
						</div>
				</div>
			</div>
		</Panel>
	)
}