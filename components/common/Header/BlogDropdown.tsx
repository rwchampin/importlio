"use client";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import BlogCardSmall from "@/app/components/BlogCardSmall";

export default function BlogDropdown() {
  const { posts } = useAppSelector((state) => state.blog);

  return (
    <>
      <ul role="list" className="flex flex-col gap-2">
        {posts &&
          posts.slice(0, 3).map((post: any, i: any) => (
            <li key={i} role="listitem" className="p-2 bg-gray-200 rounded-md">
              <BlogCardSmall post={post} />
            </li>
          ))}
      </ul>
      <div className="mt-5 text-sm">
        <Link
          href="/ecommerce-tutorials"
          className="bg-button text-offwhite flex items-center justify-center w-full h-input rounded-lg font-medium transition duration-150 ease-in-out hover:text-gray-500"
        >
          View all posts
        </Link>
      </div>
    </>
  );
}


