// import { useRef, useEffect, useState } from "react";

 
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MagneticCta = ({ children }) => {
  const containerRef = useRef(null);
  const innerElementsRef = useRef([]);
  const innerTextRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const innerElements = innerElementsRef.current;
    const innerText = innerTextRef.current;

    const magnetic = new Magnetic(container, innerElements, innerText);

    return () => {
      // Clean up event listeners if component unmounts
      container.removeEventListener("mousemove", magnetic.mousemoveFn);
      container.removeEventListener("mouseleave", magnetic.mouseleaveFn);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {React.Children.map(children, (child, index) => {
        const innerElementRef = (el) => (innerElementsRef.current[index] = el);
        const innerTextRefCallback = (el) => (innerTextRef.current[index] = el);

        return React.cloneElement(child, {
          ref: innerElementRef,
          innerTextRef: innerTextRefCallback,
        });
      })}
    </div>
  );
};

const Magnetic = (element, innerElements, innerText) => {
  element.addEventListener("mousemove", (ev) => {
    ev.currentTarget.classList.add("is-active");
    mousemoveFn(ev, element, innerElements, innerText);
  });

  element.addEventListener("mouseleave", (ev) => {
    ev.currentTarget.classList.remove("is-active");
    mouseleaveFn(innerElements, innerText);
  });

  const mousemoveFn = (ev, element, innerElements, innerText) => {
    const buttonPosX = element.getBoundingClientRect().left;
    const buttonPosY = element.getBoundingClientRect().top;

    const pageX = ev.clientX;
    const pageY = ev.clientY;

    const xPosOfMouse = pageX - buttonPosX;
    const yPosOfMouse = pageY - buttonPosY;

    const xPosOfMouseInsideButton = xPosOfMouse - element.offsetWidth / 2;
    const yPosOfMouseInsideButton = yPosOfMouse - element.offsetHeight / 2;

    const animationDivider = 3;
    const animationDividerText = 1.5;

    gsap.to(innerElements, 0.3, {
      x: xPosOfMouseInsideButton / animationDivider,
      y: yPosOfMouseInsideButton / animationDivider,
      ease: "power3.out",
    });

    if (innerText.length > 0) {
      gsap.to(innerText, 0.2, {
        x: xPosOfMouseInsideButton / animationDividerText,
        y: yPosOfMouseInsideButton / animationDividerText,
        ease: "power3.out",
      });
    }
  };

  const mouseleaveFn = (innerElements, innerText) => {
    gsap.to(innerElements, 0.3, {
      x: 0,
      y: 0,
      ease: "power3.out",
    });

    if (innerText.length > 0) {
      gsap.to(innerText, 0.5, {
        x: 0,
        y: 0,
        ease: "power3.out",
      });
    }
  };
};

export default MagneticCta;



// class Magnetic {
//     constructor(element, innerElement) {
//         this.innerEl = element.querySelectorAll(innerElement);
//         this.innerText = element.querySelectorAll("div");

//         element.addEventListener("mousemove", (ev) => {
//             ev.currentTarget.classList.add("is-active");
//             this.mousemoveFn(ev, element);
//         });

//         element.addEventListener("mouseleave", (ev) => {
//             ev.currentTarget.classList.remove("is-active");
//             this.mouseleaveFn(ev, element);
//         });
//     }

//     mousemoveFn(ev, element) {
//         // Get X-coordinate for the left button edge
//         const buttonPosX = element.getBoundingClientRect().left;
//         const buttonPosY = element.getBoundingClientRect().top;

//         // Get position of the mouse inside element from left edge
//         // (current mouse X position - button x coordinate)
//         const pageX = ev.clientX;
//         const pageY = ev.clientY;

//         const xPosOfMouse = pageX - buttonPosX;
//         const yPosOfMouse = pageY - buttonPosY;

//         // Get position of mouse relative to button center
//         // Mouse position inside element - button width / 2
//         // To get positive or negative movement
//         const xPosOfMouseInsideButton = xPosOfMouse - element.offsetWidth / 2;
//         const yPosOfMouseInsideButton = yPosOfMouse - element.offsetHeight / 2;

//         // Button text divider to increase or decrease text path
//         const animationDivider = 3;
//         const animationDividerText = 1.5;

//         // Animate button text positive or negative from center
//         gsap.to(this.innerEl, 0.3, {
//             x: xPosOfMouseInsideButton / animationDivider,
//             y: yPosOfMouseInsideButton / animationDivider,
//             ease: "power3.out",
//         });

//         if (this.innerText.length > 0) {
//             gsap.to(this.innerText, 0.2, {
//                 x: xPosOfMouseInsideButton / animationDividerText,
//                 y: yPosOfMouseInsideButton / animationDividerText,
//                 ease: "power3.out",
//             });
//         }
//     }

//     // On mouse leave
//     mouseleaveFn() {

//         // Animate button text reset to initial position (center)
//         gsap.to(this.innerEl, 0.3, {
//             x: 0,
//             y: 0,
//             ease: "power3.out",
//         });

//         if (this.innerText.length > 0) {
//             gsap.to(this.innerText, 0.5, {
//                 x: 0,
//                 y: 0,
//                 ease: "power3.out",
//             });
//         }
//     }
// }
