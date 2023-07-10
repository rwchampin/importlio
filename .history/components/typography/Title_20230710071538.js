"use client";
import React, { useEffect, useRef } from 'react';
import gsap, { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

const Title = ({ children, className, ...rest }) => {
    const titleRef = useRef(null);

    useEffect(() => {
        const split = new SplitText(titleRef.current, { type: 'chars, words, lines' });
        gsap.set(split.chars, { perspective: 400  })
        split.chars.forEach((char, i) => {
            gsap.set(char, { z: gsap.utils.random(-25, 25), transformOrigin: '50% 50%' });
        });
    }, []);

    return (
        <h1 style={{ perspective: 800, transformStyle: 'preserve-3d', filter: 'drop-shadow(30px 10px 4px black'}} ref={titleRef} className={`${className} text-5xl font-montserrat text-white`} {...rest}>
            {children}
        </h1>
    );
};

export default Title;

