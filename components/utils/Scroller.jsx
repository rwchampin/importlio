"use client";
import React, {useEffect, useRef, useLayoutEffect} from 'react';
import gsap, {ScrollSmoother, ScrollTrigger} from 'gsap/all';
import dynamic from 'next/dynamic';

const ToTop=dynamic(() => import('@/components/common/ToTop'));

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Scrollbar({children}) {
  const scrollTrackRef=useRef(null);
  const scrollBarRef=useRef(null);



  useEffect(() => {
    const scrollTrack=scrollTrackRef.current;
    const scrollbar=scrollBarRef.current;
    const windowHeight=window.innerHeight;
    const scrollTrackHeight=windowHeight*0.8;

    const setScrollbar=(progress) => {
      gsap.to(scrollbar, {height: progress*scrollTrackHeight});
    }
    // ScrollSmoother.create({
    //   smooth: .5,               // how long (in seconds) it takes to "catch up" to the native scroll position
    //   effects: true,           // looks for data-speed and data-lag attributes on elements
    //   smoothTouch: 0.1,
    //   onUpdate: function (p) {
    //     const progress=p.scrollTrigger.progress;
    //     setScrollbar(progress)
    //   }
    // })
  }, [])



  const size=30;



  return (

    // <>
    //   <div ref={scrollTrackRef} className="scroll-track fixed w-[2px] bg-gray-200 shadow-inner right-0">
    //     <div ref={scrollBarRef} className="scroll-bar absolute w-full bg-black"></div>
    //   </div>
      <div id="smooth-wrapper" className="fade">
        <div id="smooth-content" className="min-h-[calc(100vh-4rem)] w-full bg-darkRed2 flex flex-col">
          {children}
          
        </div>

      </div>
      


    // </>

  );
};


