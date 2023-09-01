import Image from "next/image";
import { ImageProps } from "@/lib/constants";

export default function BackgroundImage({ src, alt }:ImageProps) {
  return (
    <Image
      alt={alt}
      src={src}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
}
