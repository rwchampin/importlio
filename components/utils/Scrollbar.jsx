"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Scrollbar() {
  const scrollTrackRef = useRef(null);
  const scrollBarRef = useRef(null);

  useEffect(() => {
    const scrollTrack = scrollTrackRef.current;
    const scrollBar = scrollBarRef.current;

    // Set the initial height of the scroll track
    const windowHeight = window.innerHeight;
    const scrollTrackHeight = windowHeight * 0.8;
    scrollTrack.style.height = `${scrollTrackHeight}px`;

    // Update the scroll bar height based on scroll progress
    const updateScrollBar = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const scrollProgress = scrollTop / scrollHeight;

      const maxScrollBarHeight = scrollTrackHeight - scrollBar.offsetHeight;
      const scrollBarHeight = maxScrollBarHeight * scrollProgress;

      gsap.to(scrollBar, { height: scrollBarHeight, duration: 0.3 });
    };

    // Event listener for scroll events
    const handleScroll = () => {
      requestAnimationFrame(updateScrollBar);
    };

    // Initialize the scrollbar animation
    const init = () => {
      updateScrollBar();
      window.addEventListener('scroll', handleScroll);
    };

    // Cleanup event listener when the component is unmounted
    const cleanup = () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // Initialize and cleanup
    init();
    return cleanup;
  }, []);

  return (

      <div ref={scrollTrackRef} className="scroll-track fixed w-[2px] bg-gray-200 shadow-inner right-0">
        <div ref={scrollBarRef} className="scroll-bar absolute w-full bg-black"></div>
      </div>


  );
};


