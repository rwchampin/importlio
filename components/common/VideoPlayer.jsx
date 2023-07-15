"use client";

export default function VideoPlayer({ src, rounded }){

     

    return (

      <video className={`object-fill h-full w-full ${rounded ? 'rounded-lg' : ''}`} playsInline muted autoPlay loop>
        <source src={src} type="video/mp4" />

      Your browser does not support the video tag.
    </video>

    );
  };

