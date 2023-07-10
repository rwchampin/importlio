"use client";
import React, { useEffect, useRef } from 'react';
import gsap, { SplitText } from 'gsap/all';



const Title = ({ children, className, ...rest }) => {
 

    return (
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${className}`} {...rest}>
            {children}
        </h1>
    );
};

export default Title;

