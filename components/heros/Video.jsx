import { VideoPlayer } from '@/components/common';
export default function Video({ src}) {

    return (
        <VideoPlayer src={src} rounded />
    );
}