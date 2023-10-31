import React from 'react'

export default function Picture({ images }: any) {
    debugger
  return (
    <picture>
        {/* source for mobile phobne */}
        <source media="(max-width: 640px)" srcSet={images.mobile_image} />
        {/* source for tablet */}
        <source media="(max-width: 768px)" srcSet={images.tablet_image} />
        {/* source for desktop */}
        <source media="(max-width: 1024px)" srcSet={images.desktop_image} />
        {/* source for large desktop */}
        <img src={images.desktop_image} alt={images.alt} />
    </picture>
  )
}
