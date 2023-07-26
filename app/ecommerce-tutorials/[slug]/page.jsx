"use client";
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {useParams} from 'next/navigation'
import gsap, {ScrollTrigger} from 'gsap/all'
import {Primary, Section, TagCloud} from '@/components/common';
import {BasicPage} from "@/components/pages";

import {Title} from '@/components/typography'
gsap.registerPlugin(ScrollTrigger)

export default function Page() {
	const {slug}=useParams()

	const [ post, setPost ]=useState([]);
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}`).then(res => res.json()).then(data => {
			setPost(data)
		})

		// gsap.to(".fi", {
		// 	scrollTrigger: {
		// 		trigger: ".fi",
		// 		start: "top top",
		// 		end: "bottom top",
		// 		scrub: true,
		// 		pin: true,
		// 		// markers: true
		// 		pinSpacing: false
		// 	},
		// 	backgroundPosition: "0% -100%",
		// 	ease: "none"
		// })

	}, [ slug ])
	return (
		<BasicPage
			theme="light"
			title={post.title}
			subtitle={post.subtitle}
			headline={ post.readtime}
			shadowText={post.title}
			bg={post.featured_image}
		>
			<Section className="p-5">

				{/* <Image 
				src={post.featured_image}
				alt={post.title}
				fill
			/> */}

 
				 
				
					  
				{/* <div className='text-xs font-bold font-montserrat'>
						{post.readtime} read
					</div>
					<div className='text-xs font-bold font-montserrat'>
						{post.published_at}
					</div> */}


				{post.content}
				{/* <TagCloud tags={post.tags} />
				<TagCloud tags={post.categories} /> */}
			</Section>
		</BasicPage>

	)
}