
import {Image as II} from "@nextui-org/react";

export default function Image({
    width,
    height,
    alt,
    src,
}) {
  return (
    <II
        width={width}
        height={height}
        alt={alt}
        src={src}
    //   src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
  );
}
