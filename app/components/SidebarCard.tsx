import Link from "next/link";

import Image from "next/image";

export default function SidebarCard({ post }: any) {
    const size = 100;
  return (
    <div className="shadow-lg rounded-lg border border-gray-200 p-5 flex flex-col">
      <p className="text-xxs text-gray-500 flex">
        <time dateTime={post.updated}>{post.updated}</time>
      </p>
      <div className="flex flex-col gap-5">
        <Image
          src={post.featured_image}
          alt={post.title}
          width={size}
          height={size}
          layout="responsive"
          className="rounded-lg"
        />
        <Link href={`/ecommerce-tutorials/${post.slug}`} className="block">
          <p className="text-md font-semibold text-gray-900">{post.title}</p>
          <p className="text-sm text-gray-500">{post.excerpt}</p>
        </Link>
        <div className="mt-3">
          <Link
            href={post.slug}
            className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Read full story
          </Link>
        </div>
      </div>
    </div>
  );
}
