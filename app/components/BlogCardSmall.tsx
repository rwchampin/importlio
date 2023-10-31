// "use client";
import Link from "next/link";
import { Divider, Image } from "@nextui-org/react";

const TagsAndCategories = ({ post }: any) => {
  return (
    <div className="flex gap-2 overflow-x-scroll w-full">
      {post.tags.map((tag: any, i: any) => (
        <Link
          className="whitespace-nowrap text-xxs"
          key={i}
          href={`/ecommerce-tutorials/tags/${tag.slug}`}
        >
          {/* <Chip   color="primary"> */}
          {tag.name}
          {/* </Chip> */}
        </Link>
      ))}
      {post.categories.map((category: any, i: any) => (
        <Link
          className="whitespace-nowrap text-xxs"
          key={i}
          href={`/ecommerce-tutorials/categories/${category.slug}`}
        >
          {/* <Chip color="secondary"> */}
          {category.name}
          {/* </Chip> */}
        </Link>
      ))}
    </div>
  );
};
export default function BlogCardSmall({ post }: any) {
  const img_src = post.tablet_image || post.featured_image
  // if(!post) return null;
  return (

    <div className="flex gap-1 relative items-center justify-between  ">
      <div className="w-100 h-100 bg-gray-400">
      {img_src && <Image
        loading="eager"
        isZoomed
        src={img_src}
        width={100}
        height={100}
        radius="lg"
        className="shadow-md"
        fallbackSrc="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        alt={`Shopify Dropshipping Blog: ${post.title} | Importlio`}
      />}
</div>
<div
        className="flex flex-col gap-1 w-full"
        style={{ maxWidth: "calc(100% - 50px)" }}
>
        <div className="flex w-full items-center justify-between">
          <time dateTime={post.updated} className="text-xxs text-black/40">
            {post.updated_pretty}
          </time>
          <div className="text-xxs text-black/40 font-bold">
            {post.read_time} min read
          </div>
        </div>
        <h3 className="font-bold line-clamp-2 whitespace-break-spaces" title={post.title}>
          {post.title}
        </h3>

        <div className="flex justify-between items-center gap-2">
          {post.post_type && <Link
            className="whitespace-nowrap text-xxs text-black/40 font-bold"
            href={`/ecommerce-tutorials/post-types/${post.post_type.slug}`}
          >
            {post.post_type.name}
          </Link>}
        </div>
        <p title={post.excerpt} className="text-xxs line-clamp-2 whitespace-break-spaces">
          {post.excerpt}
        </p>
        <Divider />
        {/* <TagsAndCategories post={post} /> */}
        </div>
        </div>
  );
}
