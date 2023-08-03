"use client";

import Image from 'next/image';
import Link from 'next/link';
import {useState, Suspense} from 'react';
import {Spacer} from '@/components/utils';
import {  SocialShareButtons, TagCloud, Likes} from '@/components/common';
import {Primary} from '@/app/components/buttons';

export default function PostCard({title, content, featured_image,post_type, tags, categories, slug, published, updated, readtime}) {
	const [ hover, setHover ]=useState(false);
	const maxLength=200;

	function truncateString(str, maxLength) {
		if(!str) return;
		if(str.length<=maxLength) {
			return str;
		}

		return str.slice(0, maxLength)+'...';
	}


	return (

			<article
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			className={`rounded-lg gap-5 recent-post w-full overflow-hidden flex flex-col justify-start md:w-[48%] lg:w-[32%]]`}
			>
				<Link
					className='gap-5 flex  flex-col'
					href={`/ecommerce-tutorials/${slug}`}
					alt={"Shopify Amazon Dropshipping Product Importer App - Bulk import thousands of Amazon Dropshipping Products instantly! - "+title}
				>
					<div className='relative bg-offgray rounded-lg overflow-hidden aspect-square   shadow-lg' >
						<Image
							className='m-0 mt-0 not-prose  aspect-square'
							fill
							src={featured_image}
							alt="Shopify Amazon Dropshipping Product Importer App - Bulk import thousands of Amazon Dropshipping Products instantly!"
						/>

						{/* <SocialShareButtons
					show={hover}
					className='absolute bottom-0 right-0'
					url={`https://importlio.com/ecommerce-tutorials/${slug}`}
					title={title}
					summary={content}
				/> */}

					</div>
					<div className="overflow-hidden min-h-[50%] p-5 rounded-xl bg-gray-200  shadow-lg">
						<div className='flex flex-col  justify-between h-[100%]'>
							<div>
								<div className='font-bold text-xs text-gray-500 flex justify-between'>
									<div className='text-xxs w-full flex items-center justify-between'>
									<span 
										className='text-xxs text-darkGray11 bg-gray8 rounded-full  p-1 font-bold'
									>
										{/* {post_type.name} */}
									</span>

										<time dateTime={updated}><span className='font-bold font-apercu-bold'>{updated}</span></time>

									</div>
								</div>
								<Spacer size={2} />
								<Link
									key={Math.random()+'-link'}
									href={`/ecommerce-tutorials/${slug}`}

								>
									<h4 className='break-words whitespace-break-spaces text-heading-4 not-prose leading-7'>{title}</h4>
								</Link>
								<span className='text-xxs'>{readtime} read</span>

								<Spacer size={1} />
							 <p className='text-sm' dangerouslySetInnerHTML={{__html: truncateString(content, maxLength)}} />
							</div>

							<TagCloud data={tags} className="bg-gray-300 shadow-xl" />

							{/* <Likes likes={likes} /> */}
							<Spacer size={3} />

							<Primary
								key={slug+'-button'}
								href={`/ecommerce-tutorials/${slug}`}
							>READ MORE</Primary>

						</div>
					</div>


				</Link>
			</article>

	)
}