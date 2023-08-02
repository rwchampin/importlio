"use client"
import {useParams} from 'next/navigation'
import gsap, {ScrollTrigger} from 'gsap/all'
import {Section, TagCloud} from '@/components/common';
import {BasicPage} from "@/components/pages";
// import {Sidebar} from "@/components/blog";
import dynamic from 'next/dynamic';


// gsap.registerPlugin(ScrollTrigger)

export default async function Page({params}: {params: {slug: string}}) {
	const {slug}=useParams()
	const res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}`);
	const post= await res.json();


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




	return (
    <BasicPage
      showButton={false}
      customComponent={null}
      theme="light"
      title={post.title}
      subtitle={post.title}
      headline={post.published + " | " + post.readtime}
      shadowText={post.title}
      bg={post.featured_image}
      xPos={0}
      yPos={50}
    >
      <Section className="p-5 gap-5 flex">
				<article dangerouslySetInnerHTML={{__html: post.content}} />

        {/* <Sidebar /> */}
        {/* <TagCloud data={post.tags} />
				<TagCloud data={post.categories} />     */}
      </Section>
    </BasicPage>
  );
}