"use client";
import TagCloud from "@/app/components/TagCloud";
import BasePage from "@/app/components/BasePage";
import { generateBlogStructuredMarkup } from "@/lib/functions";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

// import Sidebar from "@/app/components/BlogSidebar/Sidebar";

import JsonLd from "@/app/components/JsonLd";
import Spinner from "@/app/components/Spinner";
// import AdminBar from "@/app/components/AdminBar";

export default function ClientContent({ 
    post,
 }:any) {
  const router = useRouter();
  if(!post) {
    toast.error("There was an issue loading this post. Please try again later.");
    router.push("/ecommerce-tutorials");
    return;
  }
 
  const json = generateBlogStructuredMarkup(post);
   

if(!post) return <Spinner />

 const images = {
  mobile_image: post.mobile_image,
  tablet_image: post.tablet_image,
  desktop_image: post.desktop_image,
    alt: post.image_alt_text
 }
 debugger
  return (
    <BasePage
      theme={post.theme}
      title={post.title}
      subtitle={post.title}
      headline={post.headline}
      shadowText={post.title}
      bg={post.featured_image}
      images={images}
    >
      <div className="flex flex-col p-5">
        {/* {post.post_type.name} */}
 <TagCloud data={post.tags} type="tags" /> 

        <TagCloud data={post.categories} type="categories" /> 
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full p-5">
        <article
          className="flex-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {/* <aside className="w-full lg:w-1/4"><Sidebar /></aside> */}
      </div>

      <JsonLd json={json} />

    </BasePage>
  );
}
