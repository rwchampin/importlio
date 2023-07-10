"use client";
import React, { useEffect, useRef } from 'react';
import gsap, { SplitText } from 'gsap';

const Title = ({ children, className, ...rest }) => {
    const titleRef = useRef(null);

    useEffect(() => {
        const split = new SplitText(titleRef.current, { type: 'chars, words, lines' });
        split.chars.forEach((char, i) => {
            gsap.set(char, { rotateY: gsap.utils.random(-360, 360), transformOrigin: '50% 50%' });
        });
    }, []);

    return (
        <h1 ref={titleRef} className={className} {...rest}>
            {children}
        </h1>
    );
}
