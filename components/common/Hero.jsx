"use client"
import gsap, {ScrollTrigger, SplitText} from 'gsap/all';
import { Title,Subtitle,Headline } from "@/components/typography";

import { useEffect, useLayoutEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
gsap.registerPlugin(ScrollTrigger, SplitText);

const DynamicShadowText = dynamic(() => import("@/components/common/ShadowText"));
const Scene = dynamic(() => import("@/components/animation/Scene"));
const Primary = dynamic(() => import("@/components/common/buttons/Primary"));
export default function Hero({homepage,title, subtitle, headline, shadowText, bg, cta}) {
    const parentRef = useRef(null);
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);
	const headlineRef = useRef(null);
	const ctaRef = useRef(null);
 
	
     return (
        <Scene>
			<section ref={parentRef} className={`${homepage ? '' : 'bg-offgray'} prose-xl md:prose-2xl max-w-[90vw] mx-auto h-screen w-screen relative flex flex-col items-center justify-center`}>


			<div className="flex-1 z-10 p-5 md:p-0 flex flex-col text-left justify-center ">
                <div ref={headlineRef} data-enter={0} className="text-2xs apercu-bold font-bold uppercase text-gray-500">{headline}</div>
                <Title data-enter={1} className={`text-${bg === "light" ? "black" : "offwhite"} m-0`}>{title}</Title>
                <Subtitle ref={subtitleRef} data-enter={2}>{subtitle}</Subtitle>
				<div ref={ctaRef} data-enter={3}> 
					{cta}
				</div>
            </div>
				
			</section>
			<DynamicShadowText text={shadowText} />
		</Scene>
    )
}

