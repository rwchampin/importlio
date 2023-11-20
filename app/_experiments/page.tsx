"use client";
import React, { useEffect } from 'react'
import Sketch from './sketch';

export default function Page() {
    const ref = React.useRef<any>(null);

    useEffect(() => {
        if(!ref.current) return;
       const sketch = new Sketch({
            dom: ref.current,
        })
        return () => sketch.destroy();
    }, [ref]);

  return (
    <div ref={ref} className='h-full w-full fixed top-0 left-0 ' />
  )
}
