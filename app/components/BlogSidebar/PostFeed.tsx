"use client";
import { useAppSelector } from "@/redux/hooks";
import BlogCardSmall from "@/app/components/BlogCardSmall";
export default function PostFeed() {
  const { posts } = useAppSelector((state) => state.blog);
  return (
    <>
    {posts.slice(0,5).map((post:any) => (
        <BlogCardSmall key={post.id} post={post} />
    ))}
    </>
    )
}
