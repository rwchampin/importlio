import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from "next/image"

const MouseFollower = () => {
    const initialPos = useRef([-window.innerWidth, -window.innerHeight]);
    const el = useRef(null);
    const inner = useRef(null);
    const media = useRef(null);
    const text = useRef(null);
    const gsap = useRef(null);
    const ticker = useRef(null);
    const container = useRef(document.body)
    const className = useRef('mf-cursor')
    const innerClassName = useRef('mf-cursor-inner')
    const dataAttr = useRef('cursor')
    const hiddenState = useRef('-hidden')
    const stateDetection = useRef({
        '-pointer': 'a,button'
    })
    const visibleInt = useRef(null)
    const pos = useRef({ x: initialPos[0], y: initialPos[1] });
    const vel = useRef({ x: 0, y: 0 });
    const event = useRef({});
    const events = useRef({});
    const visible = useRef(true);
    const visibleOnState = useRef(false);
    const speed = useRef(.55);
    const ease = useRef('expo.out');
    const overwrite = useRef(true);
    const skewing = useRef(0)
    const skewingText = useRef(2)
    const skewingIcon = useRef(2)
    const skewingMedia = useRef(2)
    const skewingDelta = useRef(0.001)
    const skewingDeltaMax = useRef(0.15)
    const stickDelta = useRef(0.15)
    const showTimeout = useRef(0)
    const hideOnLeave = useRef(true)
    const hideTimeout = useRef(300)
    const hideMediaTimeout = useRef(300)
    const activeState = useRef('-active')
    const activeStateOn = useRef(false)

    useEffect(() => {
        const create = () => {

            el.current.className = className;
            el.current.classList.add(hiddenState);


            inner.current.className = innerClassName;

            media.current = document.createElement('div');
            media.current.className = 'mf-media';

            text.current = document.createElement('div');
            text.current.className = 'mf-text';


            inner.current.appendChild(media);
            inner.current.appendChild(text);





        };

        const createSetter = () => {
            const quickSetter = gsapRef.current.quickSetter;
            const setter = {
                x: quickSetter(elRef.current, 'x', 'px'),
                y: quickSetter(elRef.current, 'y', 'px'),
                rotation: quickSetter(elRef.current, 'rotation', 'deg'),
                scaleX: quickSetter(elRef.current, 'scaleX'),
                scaleY: quickSetter(elRef.current, 'scaleY'),
                wc: quickSetter(elRef.current, 'willChange'),
                inner: {
                    rotation: quickSetter(innerRef.current, 'rotation', 'deg'),
                },
            };
            gsapRef.current.set(this, { setter });
        };

        function bind(el, container, options, pos, vel, skewing, stick, setSkewing, removeSkewing, addState, removeState, setStick, removeStick, show, hide, toggle, setter) {
            let visibleInt;
            const event = {
                mouseleave: () => hide(),
                mouseenter: () => show(),
                mousedown: () => addState(activeState.current),
                mouseup: () => removeState(activeState.current),
                mousemoveOnce: () => show(),
                mousemove: (e) => {
                    gsap.to(pos, {
                        x: stick ? stick.x - ((stick.x - e.clientX) * options.stickDelta) : e.clientX,
                        y: stick ? stick.y - ((stick.y - e.clientY) * options.stickDelta) : e.clientY,
                        overwrite: options.overwrite,
                        ease: options.ease,
                        duration: visible.current ? options.speed : 0,
                        onUpdate: () => vel.x = e.clientX - pos.x,
                        onUpdate: () => vel.y = e.clientY - pos.y
                    });
                },
                mouseover: (e) => {
                    for (let target = e.target; target && target !== container; target = target.parentNode) {
                        if (e.relatedTarget && target.contains(e.relatedTarget)) break;

                        for (let state in options.stateDetection) {
                            if (target.matches(options.stateDetection[state])) addState(state);
                        }

                        if (options.dataAttr) {
                            const params = getFromDataset(target);
                            if (params.state) addState(params.state);
                            if (typeof (params.show) !== 'undefined') show();
                            if (typeof (params.stick) !== 'undefined') setStick(params.stick || target);
                        }
                    }
                },
                mouseout: (e) => {
                    for (let target = e.target; target && target !== container; target = target.parentNode) {
                        if (e.relatedTarget && target.contains(e.relatedTarget)) break;

                        for (let state in options.stateDetection) {
                            if (target.matches(options.stateDetection[state])) removeState(state);
                        }

                        if (options.dataAttr) {
                            const params = getFromDataset(target);
                            if (params.state) removeState(params.state);
                            if (typeof (params.show) !== 'undefined') hide();
                            if (typeof (params.stick) !== 'undefined') removeStick();
                        }
                    }
                }
            };

            if (options.hideOnLeave) {
                container.addEventListener('mouseleave', event.mouseleave, { passive: true });
            }
            if (options.visible) {
                container.addEventListener('mouseenter', event.mouseenter, { passive: true });
            }
            if (activeState.current) {
                container.addEventListener('mousedown', event.mousedown, { passive: true });
                container.addEventListener('mouseup', event.mouseup, { passive: true });
            }
            container.addEventListener('mousemove', event.mousemove, { passive: true });
            if (options.visible) {
                container.addEventListener('mousemove', event.mousemoveOnce, {
                    passive: true,
                    once: true,
                });
            }
            if (options.stateDetection || options.dataAttr) {
                container.addEventListener('mouseover', event.mouseover, { passive: true });
                container.addEventListener('mouseout', event.mouseout, { passive: true });
            }
        }

        const getFromDataset = (el) => {
            const data = {};
            if (el.dataset[options.dataAttr]) {
                const params = el.dataset[options.dataAttr].split(';');
                params.forEach((param) => {
                    const [key, value] = param.split(':');
                    data[key] = value;
                });
            }
            return data;
        }

        const addState = (state) => {
            if (state && !eventsRef.current[state]) {
                eventsRef.current[state] = true;
                if (options[state]) options[state]();
            }
        }

        const removeState = (state) => {
            if (state && eventsRef.current[state]) {
                eventsRef.current[state] = false;
                if (options[state]) options[state]();
            }
        }

        const setStick = (el) => {
            const rect = el.getBoundingClientRect();
            stickRef.current = {
                x: rect.left + (rect.width / 2),


                y: rect.top + (rect.height / 2),
            };
        }

        const removeStick = () => {
            stickRef.current = null;
        }

        const show = () => {
            clearTimeout(visibleIntRef.current);
            if (!visible) {
                visible.current = true;
                visibleIntRef.current = setTimeout(() => {
                    elRef.current.classList.remove(hiddenState);
                }, options.showTimeout);
            }
        }

        const hide = () => {
            clearTimeout(visibleIntRef.current);
            if (visible) {
                visible.current = false;
                elRef.current.classList.add(hiddenState);
            }
        }

        const toggle = () => {
            if (visible) hide();
            else show();
        }

        const setSkewing = (skew) => {
            skewingRef.current = skew;
        }

        const removeSkewing = () => {
            skewingRef.current = 0;
        }

        const setSkewingDelta = (delta) => {
            skewingDeltaRef.current = delta;
        }

        const removeSkewingDelta = () => {
            skewingDeltaRef.current = 0;
        }

        const setSkewingDeltaMax = (delta) => {
            skewingDeltaMaxRef.current = delta;
        }

        const removeSkewingDeltaMax = () => {
            skewingDeltaMaxRef.current = 0;
        }

        const setStickDelta = (delta) => {
            stickDeltaRef.current = delta;
        }



        const init = () => {
            create();
            createSetter();
            bind(elRef.current, container, options, posRef.current, velRef.current, skewingRef.current, stickRef.current, setSkewing, removeSkewing, addState, removeState, setStick, removeStick, show, hide, toggle, setter);
        }

        init();
    }, []);

    return (
        <svg
            ref={el}
            className="mf-cursor" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
                ref={inner}
                className="mf-cursor-inner" cx="50" cy="50" r="50" fill="white" />
        </svg>
    )
}
