import Image from 'next/image'
import {ImageProps } from '@/lib/constants'
 

export default function ResponsiveImage({
    src,
    alt,
}:ImageProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt={alt}
        src={src}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  )
}