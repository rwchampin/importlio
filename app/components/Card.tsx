"use client";

import Image from "next/image";
import TagCloud from "./TagCloud";
import Link from "next/link";
import ShadowText from "./typography/ShadowText";
import Heart from "./Heart";
const CardHeader = ({ variant, post }: any) => {
  return (
    <div className="w-fill flex gap-1 items-center mb-2 text-xxs">
      <time dateTime={post.updated}>{post.updated_pretty}</time>
      <span className="font-[50px]">&bull;</span>
      {post.post_type && <Link href={`/dropshipping/post-types/${post.post_type.slug}`} className="border-2 border-gray-500 bg-gray-300 text-gray-800 rounded-full text-xxs px-2 py-1">{post.post_type.name}</Link>}

      {!post.post_type && "Blog Post"}
    </div>
  );
};

const CardMainContent = ({ variant, post }: any) => {

  if(variant === 'sidebar') {
    return (
      <div className="flex flex-col">
        <Link href={`/dropshipping/${post.slug}`}>
          <h3 className="text-sm whitespace-break-spaces break-words mb-0 line-clamp-1 truncate ..."
          >{post.title}</h3>
          <h4 className="text-xxs text-gray-500">{post.subtitle}</h4>
        </Link>
        <div className="h-[1px] w-full max-w-[500px] bg-black my-2" />
        <p className="text-xxxs">{post.excerpt}</p>
      </div>
    )
  }
  return (
    <Link href={`/dropshipping/${post.slug}`}>
      <h3 className="text-heading-4 whitespace-break-spaces break-words">{post.title}</h3>
      <h4 className="text-heading-5 text-gray-500">{post.subtitle}</h4>
      <div className="h-[1px] w-full max-w-[500px] bg-black my-3" />
        <div><p>{post.excerpt}</p></div>
    </Link>
  );
};

const CardImage = ({ variant, post }: any) => {

  if(variant === 'sidebar') {
    return (
      <Link
      href={`/dropshipping/${post.slug}`}
     className="relative w-[100px] h-[100px] overflow-hidden rounded-xl shadow-lg"
    >
       <Image
        src={post.featured_image}
      style={{
        objectFit: 'cover',
      }}
        fill
        alt={post.image_alt_text}
      /> 
    </Link>
    )
  }

  return (
    <Link
      href={`/dropshipping/${post.slug}`}
     className="relative w-full h-[200px] overflow-hidden rounded-xl shadow-lg"
    >
       <Image
        src={post.featured_image}
        quality={80}
        sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
        fill
        alt={post.image_alt_text}
      /> 
    </Link>
  );
};

const CardFooter = ({ post }: any) => {
  return (
    <div className="w-full mx-auto mt-1 mb-2 gap-1 flex items-center justify-start overflow-scroll">
      <TagCloud data={post.tags} type="tags" />
      <TagCloud data={post.categories} type="categories" />
      </div>
  );
};
export default function 
Card({ variant="lg", post }: any) {

  let postData:any = post;
  postData.featured_image = postData.featured_image || false;
  return (
   
      <article className="card relative w-full   overflow-hidden shadow-lg rounded-xl bg-gray-200 p-1 flex border-5 border-black/10">
      
        <div className="flex flex-col gap-1 lg:flex-row">
          {postData.featured_image && <CardImage post={postData} variant={variant} />}
           <div className="relative z-100">
            <CardHeader post={post} variant={variant} />
            <CardMainContent post={post} variant={variant} />
            <CardFooter post={post} variant={variant} />
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
        <Link href={`/dropshipping/${post.slug}`}>
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
          href={`/dropshipping/${post.slug}`}
        >
          Read full article
        </Link> */}
          <ShadowText>
          {postData.shadow_text}
        </ShadowText>
      </article>

  );
}
