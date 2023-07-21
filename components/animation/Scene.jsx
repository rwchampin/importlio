"use client";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
export default function Scene({ children, type }) {
    const sceneRef = useRef(null);

    useEffect(() => {
        const entrances = gsap.utils.toArray('[data-enter]');
        gsap.fromTo(entrances, {
            opacity: 0,
            y: -30
        }, {
            opacity: 1,
            y: 0,
            stagger: .05,
            duration: .55,
            ease: 'power3.inOut'
        })
    }, []);

        // const sceneEl = scene.current;
        // const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
        // tl.from(sceneEl, {
        //     stagger: .2,
        //     opacity: 0,
        //     y: 30,
        //     ease: 'power3.inOut',
        //     duration: .5
        // })

        // get children of scene
        // const children = sceneEl.children;

        // loop through children and add data-lag attribute
        // for (let i = 0; i < children.length; i++) {
        //     const child = children[i];
        //     child.setAttribute('data-lag', i * .2);
        // }


    return (
        <section
            ref={sceneRef}
         className="relative w-full h-full p-3 md:p-4 lg:p-5"
         >
        {children}
        </section>
    );
}