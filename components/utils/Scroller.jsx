"use client";
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import gsap, { ScrollSmoother, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Scrollbar({ children }) {
  const scrollTrackRef = useRef(null);
  const scrollBarRef = useRef(null);

   
   
  useEffect(() => {
 const scrollTrack = scrollTrackRef.current;
    const scrollbar = scrollBarRef.current;
    const windowHeight = window.innerHeight;
    const scrollTrackHeight = windowHeight * 0.8;

    const setScrollbar = (progress) => {
        gsap.to(scrollbar, { height:progress * scrollTrackHeight  });
    }
    ScrollSmoother.create({
      smooth: .5,               // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true,           // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,
      onUpdate: function(p) {
        const progress = p.scrollTrigger.progress;
        setScrollbar(progress)
      }
    })
  }, [])
 
   

    

    

  return (

      <div id="smooth-wrapper" className="fade">
        <div id="smooth-content"  className="flex flex-col gap-5">
        {children}
      </div>
      <div ref={scrollTrackRef} className="scroll-track fixed w-[2px] bg-gray-200 shadow-inner right-0">
        <div ref={scrollBarRef} className="scroll-bar absolute w-full bg-black"></div>
      </div>  
      </div>
       

  );
};


