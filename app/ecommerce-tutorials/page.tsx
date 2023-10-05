"use client"
import { unSlugify } from "@/lib/functions";
import { useSearchParams } from 'next/navigation'
import BasePage from '@/app/components/BasePage';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setShowRecentPostsInFooter } from "@/redux/features/core/coreSlice";
import PostCardSkeleton from "@/app/components/skeletons/PostCardSkeleton";
// import Section from "@/app/components/Section";
import Card from '@/app/components/Card';
import JsonLd from "@/app/components/JsonLd";
// import {ScrollShadow} from "@nextui-org/react";

import Spinner from "@/app/components/Spinner";
import { Suspense, useEffect, useState } from "react";
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

 

const json = {
  "@context": "http://schema.org",
  "@type": "Blog",
  "name": "Importlio Ecommerce Tutorials",
  "description": "Read our latest ecommerce tutorials & articles about Amazon dropshipping, Shopify, ecommerce, Amazon Dropshipping product importing, and more.",
  "url": "https://www.importlio.com/ecommerce-tutorials",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Importlio - Amazon Dropshipping Bulk Product Importer & Management App",
    "url": "https://www.importlio.com"
  }
}

 
 
const findBlogPostsByPropertyAndName = (blogPosts:any, type:any, name:any) => {
  // Filter the blog posts based on the specified type and name
  const filteredBlogPosts = blogPosts.filter((post:any) => {
    if (post[type] instanceof Array) {
      // Handle properties that are arrays (e.g., 'tags', 'categories')
      const items = post[type].map((item:any) => item.name.toLowerCase());
      return items.includes(name.toLowerCase());
    } else if (typeof post[type] === 'string') {
      // Handle properties that are strings (e.g., 'title', 'excerpt')
      return post[type].toLowerCase().includes(name.toLowerCase());
    } else {
      // Handle other property types (e.g., 'read_time', 'published')
      return false; // Modify this based on your specific requirements
    }
  });

  return filteredBlogPosts;
};

 

 

export default function Page() {
  let { posts } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch()
  dispatch(setShowRecentPostsInFooter(false))
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const name = searchParams.get('name')
  
  if(name && type) {
    posts = findBlogPostsByPropertyAndName(posts, type, name);
  }
  return (
    <>
      <BasePage
        title={`Ecommerce Dropshipping Tutorials${name && type ? ` - ${unSlugify(name)}` : ''}`}
        subtitle="The Official Amazon Dropshipping Handbook & Product Importer App Tutorials"
        headline="Amazon & Shopify"
        shadowText={"Amazon Dropshipping Tutorials"}
        contentStyles="flex flex-col md:flex-row flex-wrap gap-5 px-5"
        contentParentStyles="flex flex-col md:flex-row flex-wrap gap-5"
      >

          {posts && posts.map((post:any, idx:number) => {
            return (
                  <Suspense fallback={<PostCardSkeleton />}>
                   <Card key={idx} post={post} />
                  </Suspense>
            )})}

        <JsonLd
          json={json}
          />
      </BasePage>
    </>
  );
}
