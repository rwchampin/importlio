"use client";
import { useState } from "react";
import Image from 'next/image'
import { useAppSelector } from "@/redux/hooks";

 
export default function DropDownRecentPosts() {
    const { posts } = useAppSelector(state => state.blog)
    // const [postState, setPostState] = useState<any>(posts.slice(0, 3))

    // useEffect(() => {
    //     setPostState(posts)

    // }, [posts])

 

//   if (postData.length === 0) {
//     return <div>Loading...</div>;
//   }

  return (
    <>
    {posts && posts.slice(0,3).map((post: any) => (
        <div key={post.id} className="flex gap-2 items-center justify-center">
          <Image
            src={post.featured_image}
            width={50}
            height={50}
            className="rounded-xl shadow-md"
            alt={`Shopify Dropshipping Blog: ${post.title} | Importlio`}
          />
          <div>
            <h3>{post.title}</h3>
            <p
                className="text-xxs line-clamp-2"
            >{post.excerpt}</p>
          </div>
        </div>
      ))}

      {/* {postData && postData.map((post: any) => (
        <div key={post.id} className="flex gap-2 items-center justify-center">
          <Image
            src={post.featured_image}
            width={50}
            height={50}
            className="rounded-xl shadow-md"
          />
          <div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        </div>
      ))} */}
    </>
  );
}
