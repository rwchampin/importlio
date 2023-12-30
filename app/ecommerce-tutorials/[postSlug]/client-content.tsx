"use client";
import TagCloud from "@/app/components/TagCloud";
import BasePage from "@/app/components/BasePage";
import { generateBlogStructuredMarkup } from "@/lib/functions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Sidebar from "@/app/components/BlogSidebar/Sidebar";

import JsonLd from "@/app/components/JsonLd";
import Spinner from "@/app/components/Spinner";
// import AdminBar from "@/app/components/AdminBar";
import './blog-post.css';
export default function ClientContent({ post }: any) {
  const router = useRouter();
  if (!post) {
    toast.error(
      "There was an issue loading this post. Please try again later."
    );
    router.push("/ecommerce-tutorials");
    return <Spinner lg />;
  }

  const json = generateBlogStructuredMarkup(post);

  debugger;
  if (!post) return <Spinner />;

  return (
    <BasePage
      theme={post.theme}
      title={post.title}
      subtitle={post.subtitle}
      headline={post.headline}
      shadowText={post.shadow_text}
      bg={post.featured_image}
      showBreadcrumbs={true}
      // images={images}
    >
      <div className="post flex flex-col lg:flex-row gap-4 mt-5 w-full max-w-[90vw] mx-auto">
        <div className="w-full mb-5">
          <div className="flex flex-row gap-1">
            {post.read_time} min read
            <span className="mx-1">|</span>
            <time dateTime={post.updated}>{post.updated_pretty}</time>
          </div>
          <a href={`/ecommerce-tutorials/post-types/${post.post_type.slug}`}>
          {post.post_type.name}
          </a>
          <div className="flex flex-row gap-1">
            <TagCloud data={post.tags} type="tags" />

            <TagCloud data={post.categories} type="categories" />
          </div>

          <article
            className="flex-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <aside className="w-full lg:w-1/4 sticky top-5">
            <Sidebar />
          </aside>
      </div>
      <JsonLd json={json} />
    </BasePage>
  );
}
