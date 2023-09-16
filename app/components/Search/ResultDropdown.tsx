
'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';

export const ResultDropdown = ({ show }:any) => {


    useEffect(() => {console.log(show)
        if(show === true) {
            gsap.to(".result-dropdown", {
                duration: 0.5,
                autoAlpha: 1,
                height: 444,
                ease: "power3.out"
            })
        }else   {
            gsap.to(".result-dropdown", {
                duration: 0.5,
                autoAlpha: 0,
                height: 0,
                ease: "power3.out"
            })
        }
    }, [show])
    return (
        <section className="absolute bg-default-200 dark:bg-default top-[100%] w-full overflow-hidden h-0 result-dropdown p-3   rounded-b-xl">
            fsfsff
        </section>
    )
}