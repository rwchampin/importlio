import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseFollower = (options = {}) => {
    const {
        el = null,
        container = document.body,
        className = 'mf-cursor',
        innerClassName = 'mf-cursor-inner',
        dataAttr = 'cursor',
        hiddenState = '-hidden',
        stateDetection = {
            '-pointer': 'a,button',
        },
        visible = true,
        visibleOnState = false,
        speed = 0.55,
        ease = 'expo.out',
        overwrite = true,
        skewing = 0,
        skewingText = 2,
        skewingIcon = 2,
        skewingMedia = 2,
        skewingDelta = 0.001,
        skewingDeltaMax = 0.15,
        stickDelta = 0.15,
        showTimeout = 0,
        hideOnLeave = true,
        hideTimeout = 300,
        hideMediaTimeout = 300,
        initialPos = [-window.innerWidth, -window.innerHeight],
    } = options;

    const elRef = useRef(null);
    const innerRef = useRef(null);
    const mediaRef = useRef(null);
    const textRef = useRef(null);
    const gsapRef = useRef(null);
    const tickerRef = useRef(null);
    const visibleIntRef = useRef(null);
    const posRef = useRef({ x: initialPos[0], y: initialPos[1] });
    const velRef = useRef({ x: 0, y: 0 });
    const eventRef = useRef({});
    const eventsRef = useRef({});

    useEffect(() => {
        const create = () => {
            const el = document.createElement('div');
            el.className = className;
            el.classList.add(hiddenState);

            const inner = document.createElement('div');
            inner.className = innerClassName;

            const media = document.createElement('div');
            media.className = 'mf-media';
            mediaRef.current = media;

            const text = document.createElement('div');
            text.className = 'mf-text';
            textRef.current = text;

            inner.appendChild(media);
            inner.appendChild(text);
            el.appendChild(inner);
            container.appendChild(el);

            elRef.current = el;
            innerRef.current = inner;
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
                mousedown: () => addState(options.activeState),
                mouseup: () => removeState(options.activeState),
                mousemoveOnce: () => show(),
                mousemove: (e) => {
                    gsap.to(pos, {
                        x: stick ? stick.x - ((stick.x - e.clientX) * options.stickDelta) : e.clientX,
                        y: stick ? stick.y - ((stick.y - e.clientY) * options.stickDelta) : e.clientY,
                        overwrite: options.overwrite,
                        ease: options.ease,
                        duration: visible ? options.speed : 0,
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
            if (options.activeState) {
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
                visible = true;
                visibleIntRef.current = setTimeout(() => {
                    elRef.current.classList.remove(hiddenState);
                }, options.showTimeout);
            }
        }

        const hide = () => {
            clearTimeout(visibleIntRef.current);
            if (visible) {
                visible = false;
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
            ref={elRef}
            className="mf-cursor" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
                ref={innerRef}
                className="mf-cursor-inner" cx="50" cy="50" r="50" fill="white" />
        </svg>
    )
}
