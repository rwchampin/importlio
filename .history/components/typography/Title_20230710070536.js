"use client";
import React, { useEffect, useRef } from 'react';
import gsap, { SplitText } from 'gsap';

const Title = ({ children, className, ...rest }) => {
    const titleRef = useRef(null);
    
    useEffect(() => {
        const split = new SplitText(titleRef.current, { type: 'chars, words, lines', charClass: 'letter' });
        gsap.from(split.chars, {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: 'power3.out',
        });
    }, []);
    
    return (
        <h1 ref={titleRef} className={className} {...rest}>
        {children}
        </h1>
    );
    }ƒ

