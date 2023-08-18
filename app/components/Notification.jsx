"use client";

import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Notification() {
    const ref = useRef(null);

    useEffect(() => {
        gsap.from(ref.current, {
            opacity: 0,
            x: -100,
            ease: "elastic.out(1, 0.3)",
            duration: 1,
        })
    }, [])

  return (
    <div ref={ref} className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
              totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
