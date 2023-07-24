"use client";
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {useParams} from 'next/navigation'
import gsap, {ScrollTrigger} from 'gsap/all'
import {Title} from '@/components/typography'
gsap.registerPlugin(ScrollTrigger)

export default function Page() {
	const {slug}=useParams()

	const [post, setPost] = useState([]);
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

	}, [slug])
	return (
		<div className="prose-xl overflow-visible">
			<div
				// style={{
				// 	backgroundImage: `url(${post.featured_image})`,
				// 	backgroundSize: 'cover',
				// 	// backgroundAttachment: 'fixed',
				// }}
				className="fi prose-md h-screen w-full mx-auto z-10 relative">
			<Image 
				src={post.featured_image}
				alt={post.title}
				fill
			/>
			</div>
			<div className="prose-md p-5 flex flex-col gap-10 min-h-screen mx-auto z-10 relative">
				<Title>
					{post.title}
				</Title>

				<div>
					{post.tags && post.tags.map((tag, idx) => {
						return (
							<span key={idx} className='text-xs font-bold font-montserrat'>
								{tag} {idx < post.tags.length - 1 && ','}
							</span>
						)

					}
					)}
				</div>
					<div>

						{post.categories && post.categories.map((c, idx) => {
							return (
								<span key={idx} className='text-xs font-bold font-montserrat'>
									{c} {idx < post.categories.length - 1 && ','}
								</span>
							)

						}
						)}

					<div className='text-xs font-bold font-montserrat'>
						{post.readtime} read
					</div>
					<div className='text-xs font-bold font-montserrat'>
						{post.published_at}
					</div>

				</div>

				<div className='text-md'>
					{post.content}
				</div>
				</div>
		</div>

	)
}