import { useEffect, useState } from "react";

const useTailwindBreakpoints = () => {
  const getTailwindBreakpoints = () => {
    const tailwindConfig = require("tailwindcss/defaultConfig");
    return tailwindConfig.theme.screens;
  };

  const [activeBreakpoints, setActiveBreakpoints] = useState(() => {
    const breakpoints = getTailwindBreakpoints();
    const initialActiveBreakpoints = {};

    for (const breakpoint in breakpoints) {
      initialActiveBreakpoints[breakpoint] = false;
    }

    return initialActiveBreakpoints;
  });

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const breakpoints = getTailwindBreakpoints();
      const updatedBreakpoints = {};

      for (const breakpoint in breakpoints) {
        if (currentWidth >= parseInt(breakpoints[breakpoint], 10)) {
          updatedBreakpoints[breakpoint] = true;
        } else {
          updatedBreakpoints[breakpoint] = false;
        }
      }

      setActiveBreakpoints(updatedBreakpoints);
    };

    // Call the handleResize function once on mount to set initial breakpoints
    handleResize();

    // Attach event listener to window resize to update breakpoints on resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return activeBreakpoints;
};

export default useTailwindBreakpoints;
