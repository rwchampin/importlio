"use client";
// import Image from "next/image";
import Link from 'next/link'
import BlogCardSmall from '../BlogCardSmall';


export default function ClientContent({ posts }:any) {
   return (
        <>
        {posts.map((post:any) => (
      <BlogCardSmall post={post} key={post.id} />
        ))}
        
    </>
  )
}
