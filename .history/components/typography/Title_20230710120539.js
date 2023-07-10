"use client";
import React, { useEffect, useRef } from 'react';
import gsap, { SplitText } from 'gsap/all';



const Title = ({ children, className, ...rest }) => {
 

    return (
        <h1 style={{ perspective: 800, transformStyle: 'preserve-3d', filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,.3)', color: 'white'}} ref={titleRef} className={`${className} shadow-lg text-5xl font-montserrat font-black`} {...rest}>
            {children}
        </h1>
    );
};

export default Title;

