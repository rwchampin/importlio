import { useState, useEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const idRef = useRef(null);

  useEffect(() => {
    idRef.current = ScrollTrigger.create({
      // trigger: ref.current,
      start: 0,
      end:"max",
      onUpdate: (self) => {
        const pos = ScrollTrigger.positionInViewport(ref.current,"top");
        console.log(pos);
        if (pos <= 1.8) {
          setIsIntersecting(true);
        }
      },
      once: true, // Trigger the scroll only once
      ...options,
    });



    return () => {
      // ScrollTrigger.getById(idRef.current)?.kill();
    };
  }, [ref, options]);

  return isIntersecting;
}
