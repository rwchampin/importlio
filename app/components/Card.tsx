"use client";

import Image from "next/image";
import TagCloud from "./TagCloud";
import Link from "next/link";
import ShadowText from "./typography/ShadowText";

const CardHeader = ({ post }: any) => {
  return (
    <div className="w-fill flex gap-2">
      <time dateTime={post.updated}>{post.updated_pretty}</time>
      <span className="font-[50px]">&bull;</span>
      {post.post_type && <Link href={`/ecommerce-tutorials/post-types/${post.post_type.slug}`}>{post.post_type.name}</Link>}

      {!post.post_type && "Blog Post"}
    </div>
  );
};

const CardMainContent = ({ post }: any) => {
  return (
    <Link href={`/ecommerce-tutorials/${post.slug}`}>
      <h3 className="text-heading-4 whitespace-break-spaces break-words">{post.title}</h3>
      <h4 className="text-heading-5 text-gray-500">{post.subtitle}</h4>
      <div className="h-[1px] w-full max-w-[500px] bg-black my-3" />
      <p>{post.excerpt}</p>
    </Link>
  );
};

const CardImage = ({ post }: any) => {
  return (
    <Link
      href={`/ecommerce-tutorials/${post.slug}`}
     className="bg-red-400 w-[100%] block h-auto relative">
      <Image
        src={post.mobile_image || post.featured_image}
        className="object-cover w-full h-full"
        // placeholder="blur"
        quality={80}
        fill
        alt={post.title}
      />
    </Link>
  );
};

const CardFooter = ({ post }: any) => {
  return (
    <>
      <TagCloud data={post.tags} type="tags" />
      <TagCloud data={post.categories} type="categories" />
      </>
  );
};
export default function Card({ post }: any) {
  return (
   
      <article className="relative w-full shadow-xl rounded-xl overflow-hidden bg-offwhite p-3 flex">
        <ShadowText type="card" theme={post.shadow_text_theme}>
          {post.shadowText}
        </ShadowText>
        <div className="flex flex-col gap-2">
          <CardImage post={post} />
           <div className="relative z-100">
            <CardHeader post={post} />
            <CardMainContent post={post} />
            <CardFooter post={post} />
          </div> 
        </div>
        {/* <div
        className={` ${
          !post.featured_image ? "text-black" : "text-white"
        } w-full top-1/2 translate-y-[-50%]   flex-col justify-between items-center p-3 z-10`}
      >
        <small
          className={`text-[10px] text-${
            post.headline_text_theme === "dark" ? "black" : "white"
          } font-bold`}
        >
          {" "}
          <time dateTime={post.updated}>{post.updated_pretty}</time>
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
      </div> */}

        {/* {(post.tags.length && post.categories.length) && (
        <div className="card-footer-tag-cloud-wrapper p-3 rounded-xl flex flex-row gap-1 overflow-x-auto  relative z-[9999999]">
          <TagCloud data={post.tags} type="tags" />
          <TagCloud data={post.categories} type="categories" />
        </div>
      )} */}

        {/* <Link
          className="w-full text-center bg-button text-offwhite rounded-xl h-input flex items-center justify-center"
          color="primary"
          href={`/ecommerce-tutorials/${post.slug}`}
        >
          Read full article
        </Link> */}
      </article>

  );
}
