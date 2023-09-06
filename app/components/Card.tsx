"use client";
import { Card as CC, CardFooter, Image, Button } from "@nextui-org/react";
import TagCloud from "./TagCloud";
import Link from "next/link";
export default function Card({ post }: any) {
  return (
    <div className="relative">
      <CC
        isFooterBlurred
        radius="lg"
        className="border-none w-full lg:w-1/3 xl:w-1/4 relative aspect-square"
        shadow="lg"
        fullWidth={true}
      >
        <Link 
          className="w-full h-full"
          href={`/blog/${post.slug}`}
          >
          <Image
            alt="Woman listing to music"
            className="z-0 w-full h-full object-cover"
            removeWrapper
            src={post.featured_image}
          />
        </Link>
        <h6 className="absolute w-auto h-auto [writing-mode:tb] text-[30vh] bg-gradient-to-r from-transparent from-20% to-gray-300 bg-clip-text text-red-500 break-words whitespace-nowrap">
          {post.shadow_text}
        </h6>
        <CardFooter className="flex flex-col justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </p>
          <p className="text-xs">{post.readtime} read</p>
          <TagCloud data={post.tags} type="tags" />
          <TagCloud data={post.categories} type="categories" />

        </CardFooter>
      </CC>
    </div>
  );
}
