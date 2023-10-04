"use client";
import TagCloud from "@/app/components/TagCloud";
import BasePage from "@/app/components/BasePage";

import Sidebar from "@/app/components/BlogSidebar/Sidebar";

import JsonLd from "@/app/components/JsonLd";
import Spinner from "@/app/components/Spinner";
// import AdminBar from "@/app/components/AdminBar";

export default function ClientContent({ 
    post,
    json
 }:any) {

  


   

if(!post) return <Spinner />

 
  return (
    <BasePage
      theme={post.theme}
      title={post.title}
      subtitle={post.title}
      headline={post.headline}
      shadowText={post.title}
      bg={post.featured_image}
    >
      <div className="flex p-5">
        {/* {post.post_type.name} */}
 <TagCloud data={post.tags} type="tags" /> 

        <TagCloud data={post.categories} type="categories" /> 
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full p-5">
        <article
          className="flex-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <aside className="w-full lg:w-1/4"><Sidebar /></aside>
      </div>

      <JsonLd json={json} />

    </BasePage>
  );
}
