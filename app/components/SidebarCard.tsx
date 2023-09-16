import Link from "next/link";

import Image from "next/image";

export default function SidebarCard({ post }: any) {
  const size = 100;
  return (
    <div className="shadow-lg rounded-lg border border-gray-200 p-5 flex flex-col">
      <div className="flex gap-5">
        {post && post.featured_image && (
          <Link href={`/ecommerce-tutorials/${post.slug}`} className="aspect-square h-[100px] w-[100px] relative">
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            className="rounded-lg aspect-square"
          />
          </Link>
        )}
        <div className="flex flex-col gap-1">
        <time className="text-xxs text-gray-500 flex" dateTime={post.updated}>{post.updated}</time>
          <Link href={`/ecommerce-tutorials/${post.slug}`} className="text-md font-semibold text-gray-900">
            {post.title}
          </Link>
          <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>

          <div className="mt-1">
            <Link
              href={post.slug}
              className="text-base font-semibold text-black"
            >
              Read full article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
