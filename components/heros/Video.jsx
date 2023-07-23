import { VideoPlayer } from '@/components/common';
export default function Video({ src, play}) {
    
    return (
        <section className="relative w-full h-full">
            <VideoPlayer src={src} play={play} className="inverse" />
        </section>
    );
}