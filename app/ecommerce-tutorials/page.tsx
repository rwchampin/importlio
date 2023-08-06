"use client";
import { useBlog } from "@/store/";
import { BasicPage } from "@/components/pages";
import { Section } from "@/components/common";
import { FullImageCard, Sidebar } from "@/components/blog";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { PostCardSkeleton } from "@/components/skeletons";

interface Post {
  title: string;
  slug: string;
  published: string;
  readtime: string;
  featured_image: string;
  content: string;
  tags: string[];
  categories: string[];
}

interface Posts {
  posts: Post[];
}
export default function Page() {
  const { posts}: Posts = useBlog();

  // if (loading) return <PostCardSkeleton />;
  return (
    <>
      <BasicPage
        theme="light"
        title="Ecommerce Dropshipping Tutorials"
        subtitle="The Official Amazon Dropshipping Handbook & Product Importer App Tutorials"
        headline="Amazon & Shopify"
        shadowText={"Amazon Dropshipping Tutorials"}
        belowSubtitle={null}
        bg={null}
        xPos={0}
        yPos={50}
        customComponent={null}
        showButton={true}
      >
        <Section className="p-5 flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col md:flex-row gap-5 flex-wrap">
            {posts.map((post, idx) => {
              return (
                <Suspense key={idx} fallback={<PostCardSkeleton />}>
                  <FullImageCard key={idx} post={post} />
                </Suspense>
              );
            })}
          </div>
          {/* <div className="w-full lg:w-1/4">
            <Sidebar />
          </div> */}
        </Section>
      </BasicPage>
    </>
  );
}
