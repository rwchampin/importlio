"use client";
import { useBlog } from "@/store/";
import { BasicPage } from "@/components/pages";
import { Section } from "@/components/common";
import { FullImageCard, Sidebar } from "@/components/blog";

import JsonLd from "@/components/common/JsonLd";
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
  const json = {
    "@context": "http://schema.org",
    "@type": "Blog",
    "name": "Importlio Ecommerce Tutorials",
    "description": "Read our latest ecommerce tutorials & articles about Amazon dropshipping, Shopify, ecommerce, Amazon Dropshipping product importing, and more.",
    "url": "https://www.importlio.com/blog",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Importlio - Amazon Dropshipping Bulk Product Importer & Management App",
      "url": "https://www.importlio.com"
    }
  }
  
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
          <div className="flex flex-col md:flex-row flex-wrap gap-5">
            {posts.map((post, idx) => {
              return (


                  <div 
                  key={idx}
                  className="overflow-hidden rounded-lg w-full flex-1 basis-full md:basis-[calc(50%-1rem)] xl:basis-[calc(33.33%-1rem)] 2xl:basis-[calc(25%-1rem)]">
                     <FullImageCard key={idx} post={post} />
                  </div>


              );
            })}
          </div>
          {/* <div className="w-full lg:w-1/4">
            <Sidebar />
          </div> */}
        </Section>
        <JsonLd
          json={json}
          />
      </BasicPage>
    </>
  );
}
