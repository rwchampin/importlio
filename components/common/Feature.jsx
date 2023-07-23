"use client"
import { useRef, useEffect } from 'react'
import gsap from 'gsap/all' 
import ScrollTrigger from 'gsap/ScrollTrigger' // Import ScrollTrigger separately
gsap.registerPlugin(ScrollTrigger)

export default function Feature(feature) {
  const p = useRef(null)

  useEffect(() => {
	const parent = gsap.utils.selector(p.current)
	const c = parent(".enter")
    gsap.from(c, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: 'expo.out',
      scrollTrigger: {
        scrub: true,
        trigger: p.current,
        markers: true
      }
    })
  }, []) // Add iconRef to the dependency array

  return (
    <div ref={p} className="feature space-y-3">
      <span  className="enter inline-block p-3 text-gray bg-gray-300 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </span>

      <h4 className="enter font-montserrat text-heading-4">{feature.title}</h4>

      <p className="enter text-left text-black dark:text-black">
        {feature.content}
      </p>
    </div>
  )
}
