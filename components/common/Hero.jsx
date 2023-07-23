import {ShadowText, Title,Subtitle,Headline } from "@/components/typography";
import { EmailForm } from "@/components/forms";
import { Modal } from "@/components/common/";
import Scene from "@/components/animation/Scene";



export default function Hero({homepage,title, subtitle, headline, shadowText, bg, showButton}) {

 
	
     return (
        <Scene>
			<section className={`${homepage ? '' : 'bg-offgray'} mx-auto h-screen w-screen relative flex flex-col items-center justify-center`}>


			<div className="flex-1 z-10 md:p-0 flex flex-col text-left justify-center w-full md:w-2/3 max-w-[90vw]">
                <Headline>{headline}</Headline>
                <Title data-enter={1} className={`text-${bg === "light" ? "black" : "offwhite"}`}>{title}</Title>
                <Subtitle data-enter={2}>{subtitle}</Subtitle>
				{showButton && <Modal ModalBody={EmailForm} data-enter={3} className="mt-5" />}
            </div>
				
			</section>
			<ShadowText text={shadowText} />
		</Scene>
    )
}

