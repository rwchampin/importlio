"use client";

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import ScrollGradient from '@/app/components/ScrollGradient';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function Scroller({children}) {


  const scrollTrackRef=useRef(null);
  const scrollBarRef=useRef(null);


  const setScrollbar = (scrolled) => {
    gsap.to(scrollBarRef.current, {
      height: (scrolled / scrollTrackRef.current.clientHeight) * scrollTrackRef.current.clientHeight,
      duration: 0.1,
      ease: 'power2.out'
    });
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const track = scrollTrackRef.current;
    const bar = scrollBarRef.current;
    const trackHeight = track.clientHeight;
    
    const setScrollBar = () => {
      
      const scrollBarHeight = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * trackHeight;
      gsap.to(scrollBarRef.current, {
        height: scrollBarHeight,
        duration: 0.1,
        ease: 'power2.out'
      });
      ;
    }
    // Set the scrollbar height
    // ScrollSmoother.create({
    //   smooth: 1,
    //   effects: true,
    //   onStart: self => {
    //     setScrollBar();
    //   },
    //   onUpdate: self => {
    //     setScrollBar()
    //   }
    // });
    

    // Example usage inside a window.scroll event listener
    window.addEventListener('scroll', () => {

      setScrollBar()
    });
    
  }, []);





  return (


<ScrollGradient>
    <div id="smooth-wrapper" className='h-screen'>
    <div id="smooth-content" className='min-h-screen flex flex-col'>

      {children}
      </div>
      </div>
          
      <div className="scroll-track fixed w-[2px] bg-gray-8 right-[5px] h-[90vh] z-[99999]" ref={scrollTrackRef}>
        <div className="scroll-bar absolute top-0 bg-black w-full" ref={scrollBarRef}></div>
      </div>
      </ScrollGradient>
     
    

  );
};


