"use client";
import { useLayoutEffect, useState } from "react";
import { screens } from '@/lib/constants';
import { debounce } from '@/lib/functions';
const useResponsive = () => {
 

  const [activeBreakpoints, setActiveBreakpoints] = useState(screens);

  useLayoutEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const breakpoints = screens;
      const updatedBreakpoints = {};

      for (const breakpoint in breakpoints) {
        if (currentWidth >= parseInt(breakpoints[breakpoint], 10)) {
          updatedBreakpoints[breakpoint] = true;
        } else {
          updatedBreakpoints[breakpoint] = false;
        }
      }
      console.log(updatedBreakpoints);
      setActiveBreakpoints(updatedBreakpoints);
    };

    // Call the handleResize function once on mount to set initial breakpoints
    handleResize();

    // Attach event listener to window resize to update breakpoints on resize
    window.addEventListener("resize",debounce(handleResize));

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", debounce(handleResize));
    };
  }, []);

  return activeBreakpoints;
};

export default useResponsive;
