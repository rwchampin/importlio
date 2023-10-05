import Link from "next/link";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Divider } from "@nextui-org/react";

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

  if(!post) return null;
  return (
    <Link
      href={`/ecommerce-tutorials/${post.slug}`}
      className="flex gap-1 items-center justify-between w-full"
    >
      <Image
        isZoomed
        as={NextImage}
        src={post.featured_image}
        width={50}
        radius="sm"
        height={50}
        fallbackSrc={"/fallback/50-logo-black.png"}
        className="rounded-xl shadow-md"
        alt={`Shopify Dropshipping Blog: ${post.title} | Importlio`}
      />

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
        <TagsAndCategories post={post} />
        </div>
    </Link>
  );
}
