"use client";

import React from "react";
import Link from "next/link";

import Card from "@/app/components/Card";
 
  
 
export default function Sidebar({ post }) {
  const [randomPosts, setRandomPosts] = React.useState(null);

  React.useEffect(() => {

    const fetchRandomPosts = async () => {
      const res = await fetch(`/api/posts/all`);
      const {posts} = await res.json();
      const results = posts.results;
      const postswimg = results.filter((post) => post.featured_image);
      const randomPosts = postswimg.sort(() => Math.random() - Math.random()).slice(0, 3);
      setRandomPosts(randomPosts);
    }

    fetchRandomPosts();
  }, []);

  if (!randomPosts) {
    return null;
  }
  return (
    <div className="sidebar w-full bg-gray-2 shadow-xl rounded-lg  flex flex-col p-3 sticky top-[5rem]">
        <div className="text-5xl uppercase font-montserrat font-black text-center">Importlio</div>
        <div
          className="text-sm uppercase font-apercu font-bold text-center text-[#6e6e73]"
        >
        Ecommerce Automation Evolved
        </div>
        <p>
        Comprehensive dropshipping solutions expertly crafted to discover, source & sell profitable products simply, quickly & efficiently.
        </p>
        <div className="text-sm uppercase font-apercu font-bold text-center text-[#6e6e73] mt-5">
        Importlio is the only dropshipping solution you’ll ever need.
        </div>
        <div className="text-sm uppercase font-apercu font-bold text-center text-[#6e6e73] mt-5">
          {randomPosts && randomPosts.map((post) => {
            debugger
            return <Card key={post.id} post={post} variant="sidebar" />
          }
          )}

        </div>
        <Link
          className="bg-button w-full rounded-md text-white font-bold uppercase text-sm text-center py-2 px-4 mt-5 mx-auto"
        href="/auth/register">
          Try It Free
        </Link>
        <Link
          className="border-2 border-button w-full rounded-md text-button font-bold uppercase text-sm text-center py-2 px-4 mt-5 mx-auto"
         href="/contact">
          Contact Us
        </Link>
    </div>
  );
}


