"use client";
import {Card as CC, CardFooter, Image, Button} from "@nextui-org/react";

export default function Card({ post }:any) {

  return (
    <CC
      isFooterBlurred
      radius="lg"
      className="border-none w-full lg:w-1/3 xl:w-1/4 relative "
      shadow="lg"
      fullWidth={true}
    >
      <Image
        alt="Woman listing to music"
        className="z-0 w-full h-full object-cover"
        removeWrapper
        src={post.featured_image}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">
            {post.title}
        </p>
        <p className="text-xs">
          {post.readtime} read
        </p>
      </CardFooter>
    </CC>
  );
}
 