"use client";

export default function VideoPlayer({ src, rounded, play , className}){



    return (

      <video autoPlay className={`${className} object-fill m-0 h-full w-full ${rounded ? 'rounded-lg' : ''}`} playsInline muted loop>
        <source src={src} type="video/mp4" />

      Your browser does not support the video tag.
    </video>

    );
  };

