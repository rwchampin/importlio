"use client";
import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollSmoother} from 'gsap/ScrollSmoother';


// import dynamic from 'next/dynamic';


// const Debug = dynamic(() => import('@/components/Debug'), {ssr: false});


export default function Scroller({children}) {
  // const {debugStatus} = useDebug();

  const scrollTrackRef=useRef(null);
  const scrollBarRef=useRef(null);


  const setScrollbar = (scrolled) => {
    gsap.to(scrollBarRef.current, {
      height: (scrolled / scrollTrackRef.current.clientHeight) * scrollTrackRef.current.clientHeight,
      duration: 0.1,
      ease: 'power2.out'
    });
  }

  useEffect(() => {
    // gsap.registerPlugin(ScrollSmoother );
  //   ScrollSmoother.create({
  //     wrapper: '#smooth-wrapper',
  //     content: '#smooth-content',
  //     smooth: 1,
  //     effects: true,
  //     onUpdate: self => {
  //       // update scrollbar with scroll progress
  //       const scrollBarHeight = scrollTrackRef.current.clientHeight * (scrollTrackRef.current.clientHeight / scrollTrackRef.current.scrollHeight);
  //       gsap.to(scrollBarRef.current, {
  //         height: scrollBarHeight * self.progress,
  //         duration: 0.1,
  //         ease: 'power2.out'
  //       });

  //     }
  //   });
    function setScrollbarHeight(scrollY, windowHeight, scrollTrackHeight) {
  // Calculate the maximum scroll distance
  const scrollBarHeight = scrollTrackRef.current.clientHeight * (scrollTrackRef.current.clientHeight / scrollTrackRef.current.scrollHeight);
  gsap.to(scrollBarRef.current, {
    height: scrollBarHeight * (scrollY / (document.body.clientHeight - windowHeight)),
    duration: 0.1,
    ease: 'power2.out'
  });
}

// Example usage inside a window.scroll event listener
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollTrackHeight = windowHeight * 0.9; // Assuming the scroll track is 90% of the window height

  const scrollbarHeight = setScrollbarHeight(scrollY, windowHeight, scrollTrackHeight);

  // Set the calculated height to your custom scrollbar indicator element


  scrollBarRef.current.style.height = `${scrollbarHeight}px`;
});
    
  }, []);





  return (


<>
    <div id="smooth-wrapper" className=''>
    <div id="smooth-content" className='flex flex-col'>

      {children}
      </div>
      </div>
          
      <div className="scroll-track fixed w-[2px] bg-gray-8 right-[5px] h-[90vh] z-[99999]" ref={scrollTrackRef}>
        <div className="scroll-bar absolute top-0 bg-black w-full" ref={scrollBarRef}></div>
      </div>
      </>
     
    

  );
};


