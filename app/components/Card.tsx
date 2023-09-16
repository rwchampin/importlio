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
          className="w-full h-full absolute"
          href={`/ecommerce-tutorials/${post.slug}`}
        >
          <Image
            alt={post.title}
            className="z-0 w-full h-full object-cover"
            removeWrapper
            fallbackSrc="https://via.placeholder.com/300x200"
            src={post.featured_image}
          />
        </Link>
        <h6 className="absolute w-auto h-auto [writing-mode:tb] text-[10vh] bg-gradient-to-r from-transparent from-20% to-gray-300 bg-clip-text break-words whitespace-nowrap">
          {post.shadowText}
        </h6>
        <div className="absolute text-white w-full top-1/2 flex-col justify-between items-center p-3 z-10">
          <small className="text-[10px]"> <time dateTime={post.updated}>{post.updated}</time></small>
          <Link href={`/ecommerce-tutorials/${post.slug}`} >
            <h3 className="text-heading-4">{post.title}</h3>
          </Link>
          <p className="text-xs">{post.readtime} readtime</p>
        </div>
       
        {(post.tags.length || post.categories.length) &&<div className="card-footer-tag-cloud-wrapper p-3 rounded-xl flex flex-row gap-1 overflow-x-auto">
          <TagCloud data={post.tags} type="tag" />
          <TagCloud data={post.categories} type="category" />
        </div>}
        <CardFooter className="absolute flex flex-col justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden  before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Link
            className="w-full text-center bg-button text-offwhite rounded-xl h-input flex items-center justify-center"
            color="primary"
            href={`/ecommerce-tutorials/${post.slug}`}
          >
            Read full article
          </Link>
        </CardFooter>
      </CC>
    </div>
  );
}
