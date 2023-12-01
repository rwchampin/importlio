"use client";
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import Debug from '@/components/Debug';
export default function Scroller({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0);
 
  const scrollTrackRef = useRef(null);
  const scrollBarRef = useRef(null);

  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const track = scrollTrackRef.current;
    const bar = scrollBarRef.current;
    const trackHeight = track.clientHeight;
    const doc = document.documentElement
    const setScrollBar = () => {
      const wHeight = window.innerHeight;
      const s = window.scrollY;
      const docHeight = doc.scrollHeight;
      const heightPercent = (docHeight - wHeight);
      const dif = s / heightPercent;
      const scrollBarHeight = dif * trackHeight;
      setScrollProgress(dif * 100);
      gsap.to(bar, {
        yPercent: dif * 100,
        duration: 0.1,
        ease: 'power2.out'
      });
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
    window.addEventListener('scroll', setScrollBar);

    return () => {
      window.removeEventListener('scroll', setScrollBar);
    }

  }, []);





  return (


    <>
      {/* <div id="smooth-wrapper" className='h-screen overflow-hidden'>
        <div id="smooth-content" className='min-h-screen flex flex-col overflow-x-hidden'>  */}

          {children}
        {/* </div> */}
      {/* </div> */}

      <div
        // role="scrollbar"
        // aria-orientation="vertical"
        // aria-valuenow={scrollProgress}
        // aria-valuemin="0"
        // aria-valuemax="100"
        className="scroll-track fixed w-[2px] bg-gray-8 right-[5px] h-[90vh] z-[99999] overflow-hidden top-1/2 transform -translate-y-1/2"
        ref={scrollTrackRef}
      >
        <div className="scroll-bar will-change-transform absolute -top-[100%] bg-black w-full h-full" ref={scrollBarRef}></div>
      </div>
      {/* {debugMode && <Debug />} */}
    </>



  );
};


