import {ShadowText, Title,Subtitle,Headline } from "@/components/typography";
import { EmailForm } from "@/components/forms";
import { Spacer } from '@/components/utils'
import { Modal } from "@/components/common/";
import Scene from "@/components/animation/Scene";


interface Props {
    title: string
    subtitle?:string
    headline?:string
    shadowText?:string
    theme: "dark" | "light"
    showButton?: boolean
}
export default function Hero({title, subtitle, headline, shadowText, theme, showButton}:Props) {
    if(!theme) {
        throw new Error("Page must have a theme")
    }
 
	
     return (
        <Scene>
			<section className={`${theme === 'light' ? 'bg-offwhite' : 'bg-offgray'} mx-auto h-screen w-screen relative flex flex-col items-center justify-center`}>


			<div className="flex-1 z-10 md:p-0 flex flex-col text-left justify-center w-full md:w-2/3 max-w-[90vw]">
                 <Headline theme={theme}>{headline}</Headline>
                <Spacer size={1} />
                <Title data-enter={1} theme={theme}>{title}</Title>
                <Spacer size={1} />
                <Subtitle data-enter={2} theme={theme}>{subtitle}</Subtitle>
                <Spacer size={1} />
				{showButton && <Modal theme={theme} ModalBody={EmailForm} data-enter={3}  />} 
            </div>
				
			</section>
			<ShadowText
            xPos="0"
            yPos="50"
            text={shadowText} />
		</Scene>
    )
}

