"use client";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks";

export default function Lazify({ children, threshold = 0 }) {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 2 });


  return (
    <div ref={ref}>
        {isIntersecting ? children : null}
    </div>
  );
  
}
