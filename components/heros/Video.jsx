import { VideoPlayer } from '@/components/common';
export default function Video({ src, play}) {
    
    return (
        <VideoPlayer src={src} play={play} className="inverse" />
    );
}