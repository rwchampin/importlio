"use client"
import { useRef, useState, useEffect, useLayoutEffect} from 'react'
import gsap, { ScrollTrigger, SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function ShadowText({text, position="left"}) {
	const titleRef = useRef(null)
 
	useEffect(() => {
		const title = titleRef.current
		
		if(titleRef.current) {
			// const split = new SplitText(title, { type: "words, chars", charsClass: "char", position: 'absolute' })

			// split.chars.map((el,idx) => {
			// 	el.setAttribute('data-lag', idx+.8)
			// 	// gsap.set(el, {fontSize, lineHeight:f })
			// });
			
			// gsap.to(split.chars, {
			// 	xPercent:-20,
			// 	opacity:1,
			// 	stagger: .05,
			// 	duration: .2,
			// 	ease: "expo.out"
			// })
			// const trigger = gsap.utils.toArray('main')
			// gsap.to(title, {
			// 	opacity: 1,
			// 	yPercent: -100,
			// scrollTrigger:{
			// 	trigger: trigger,
			// 	start: 0,
			// 	end:  "max",
			// 	scrub: true,
			// 	top: titleRef.current.offsetWidth,
			// 	// position: 'absolute',
			// 	markers: true,
			// }
			// })


		}
	}, [])
	 
 
	return (
		    <div 
			ref={titleRef} 
			data-speed="1.2"
			className={`shadow-text font-montserrat font-black`}>
				{text}
			</div>
	)
}



