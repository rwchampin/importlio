import ShadowText from '@/app/components/typography/ShadowText';
import { VideoPlayer } from '@/components/common';
export default function Video({ src, play}) {
    
    return (
        <section className="relative w-full h-full">
            <VideoPlayer src={src} play={play} className="inverse" />
           <h1 className="text-white absolute">fuck</h1> <ShadowText>HHHH</ShadowText>
        </section>
    );
}