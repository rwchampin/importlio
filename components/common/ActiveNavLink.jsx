"use client";
import { useRef, useEffect } from 'react';
import gsap, { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);
export default function ActiveNavLink({ hoveredLink }) {
    const ref = useRef(null);

   

    useEffect(() => {
        const getHoveredNavLinkPosition = (navLink) => {
            const el = ref.current;
            gsap.to(el, {
                x: navLink.offsetLeft,
                y: navLink.offsetTop + navLink.offsetHeight,
                width: navLink.offsetWidth,
                duration: .3,
                ease: "power2.inOut"
            })
        }
        const reset = () => {
            gsap.to(ref.current, {
                width: 0,
                opacity: 0,
                duration: .3,
                ease: "circ.out"
            })
        }
        const navLinks = gsap.utils.toArray('nav a');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                getHoveredNavLinkPosition(e.target)
            })
            link.addEventListener('mouseleave', (e) => {
                getHoveredNavLinkPosition(e.target)
                
            })
        }
        )

        const nav = document.querySelector('nav')
        nav.addEventListener('mouseleave', reset)

        return () => {
            nav.removeEventListener('mouseleave', reset)
            navLinks.forEach(link => {  
                link.removeEventListener('mouseenter', (e) => {
                    getHoveredNavLinkPosition(e.target)
                })
                link.removeEventListener('mouseleave', (e) => {
                    getHoveredNavLinkPosition(e.target)
                    
                })
            }
            )
        }
    }, [hoveredLink])

    return (
        <span 
        ref={ref}
        // style={{ top: '-25%'}}
        className="absolute h-[2px] bg-black" 
        />
    )
}