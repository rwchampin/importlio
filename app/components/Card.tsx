"use client";
import { Card as CC, CardFooter, Image } from "@nextui-org/react";
import TagCloud from "./TagCloud";
import Link from "next/link";
import ShadowText from "./typography/ShadowText";
export default function Card({ post }: any) {
  return (
    <CC
      isFooterBlurred
      radius="lg"
      className="border-none w-full lg:w-1/3 xl:w-1/4 relative aspect-square p-0 m-1"
      shadow="lg"
      fullWidth={true}
    >
      <Link
        className="w-full h-full absolute"
        href={`/ecommerce-tutorials/${post.slug}`}
      >
        {post.featured_image && (
          <Image
            alt={post.title}
            className="z-0 w-full h-full object-cover"
            removeWrapper
            fallbackSrc="https://via.placeholder.com/300x200"
            src={post.featured_image}
          />
        )}
      </Link>

      <ShadowText type="card" theme={post.shadow_text_theme}>
        {post.shadowText}
      </ShadowText>

      <div
        className={` ${
          !post.featured_image ? "text-black" : "text-white"
        } w-full absolute top-1/2 translate-y-[-50%]   flex-col justify-between items-center p-3 z-10`}
      >
        <small
          className={`text-[10px] text-${
            post.headline_text_theme === "dark" ? "black" : "white"
          } font-bold`}
        >
          {" "}
          <time dateTime={post.updated}>{post.updated}</time>
        </small>
        <Link href={`/ecommerce-tutorials/${post.slug}`}>
          <h3
            className={`text-heading-4 ${
              post.title_text_theme === "light" ? "text-white" : "text-black"
            }`}
          >
            {post.title}
          </h3>
        </Link>
        <h4
          className={`text-md font-light ${
            post.subtitle_text_theme === "light" ? "text-white" : "text-black"
          }`}
        >
          {post.subtitle}
        </h4>
      </div>

      {(post.tags.length || post.categories.length) && (
        <div className="card-footer-tag-cloud-wrapper p-3 rounded-xl flex flex-row gap-1 overflow-x-auto fade-right">
          <TagCloud data={post.tags} type="tag" />
          <TagCloud data={post.categories} type="category" />
        </div>
      )}

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
  );
}
