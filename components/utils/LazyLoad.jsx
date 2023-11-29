"use client";
// import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all"; 




const LazyLoad = ({ src, dataSrc, type = "img", ...props }) => {
  const elementRef = useRef(null);
  const loadedRef = useRef(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });

    const element = elementRef.current;

    if (!dataSrc) {
      // If no dataSrc is provided, skip lazy loading and render the real asset directly
      element.src = src;
      return;
    }

    let newSRC = dataSrc;
    let newElement;

    if (type === "img") {
      newElement = document.createElement("img");
    } else if (type === "video") {
      newElement = document.createElement("video");
      // Use the 'canplay' event for video elements
      newElement.oncanplay = () => {
        newElement.oncanplay = null; // avoid recursion
        newElement.src = element.src; // swap the src
        element.src = newSRC;

        // place the low-res version on TOP and then fade it out.
        gsap.set(newElement, {
          position: "absolute",
          top: element.offsetTop,
          left: element.offsetLeft,
          width: element.offsetWidth,
          height: element.offsetHeight,
        });

        element.parentNode.appendChild(newElement);
        gsap.to(newElement, {
          opacity: 0,
          onComplete: () => newElement.parentNode.removeChild(newElement),
        });
        st && st.kill();
      };
    }

    const loadImage = () => {
      if(loadedRef.current) return;
      // For image elements, use the 'onload' event
      newElement.onload = () => {
        newElement.onload = null; // avoid recursion
        newElement.src = element.src; // swap the src
        element.src = newSRC;

        // place the low-res version on TOP and then fade it out.
        gsap.set(newElement, {
          position: "absolute",
          top: element.offsetTop,
          left: element.offsetLeft,
          width: element.offsetWidth,
          height: element.offsetHeight,
        });

        element.parentNode.appendChild(newElement);
        gsap.to(newElement, {
          opacity: 0,
          onComplete: () => newElement.parentNode.removeChild(newElement),
        });
        st && st.kill();
      };

      newElement.src = newSRC;
      loadedRef.current = true;
    };

    const st = ScrollTrigger.create({
      trigger: element,
      start: "-10% bottom",
      onEnter: loadImage,
      // markers: true,
      onEnterBack: loadImage, // make sure it works in either direction
      onUpdate: (self) => {
       
      },
    });

    return () => {
      st && st.kill();
    };
  }, [dataSrc, type, src]);

  if (type === "img") {
    return <img ref={elementRef} src={src} {...props} alt="Ecommerce Dropshipping Product Import & Management App for Shopify" />;
  } else if (type === "video") {
    return (
      <video
        muted={true}
        playsInline={true}
        autoPlay={true}
        loop={true}
        controls={false}
        ref={elementRef}
        src={src}
        {...props}
      />
    );
  }


};

export default LazyLoad;
