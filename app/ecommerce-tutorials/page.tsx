
import BasePage from '@/app/components/BasePage';
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { setShowRecentPostsInFooter } from "@/redux/features/core/coreSlice";
// import Section from "@/app/components/Section";
import type { Metadata } from "next";

// import JsonLd from "@/app/components/JsonLd";
// import {ScrollShadow} from "@nextui-org/react";

// import Sidebar from "@/app/components/BlogSidebar/Sidebar";
import BlogPageClientContent from '../components/BlogPageClientContent';
// import Spinner from "@/app/components/Spinner";
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

 

export const metadata: Metadata = {
  title: "Shopify Dropshipping Tutorials",
  description: "Learn how to dropship from Amazon to Shopify with Importlio",
  keywords: [
    "Amazon dropshipping",
    "Product importer",
    "Shopify store integration",
    "Amazon affiliates",
    "Amazon associates",
    "Dropshipping automation",
    "Shopify dropshipping",
    "Shopify tutorials",
    "Shopify dropshipping tutorials",
  ],
}

 
 

const getFilterPosts =async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
    method: "GET",
    next: {
      revalidate: 50
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { results } = await res.json();

  return results;
}

export default async function Page() {
  // let { posts } = useAppSelector((state) => state.blog);
  // const dispatch = useAppDispatch()
  // dispatch(setShowRecentPostsInFooter(false))


  const posts = await getFilterPosts()
  
  // if(name && type) {
  //   posts = findBlogPostsByPropertyAndName(posts, type, name);
  // }
  return (
    <>
      <BasePage
        title={`Ecommerce Dropshipping Tutorials`}
        subtitle="The Official Amazon Dropshipping Handbook & Product Importer App Tutorials"
        headline="Amazon & Shopify"
        shadowText={"Amazon Dropshipping Tutorials"}
        // contentStyles="flex flex-col md:flex-row flex-wrap gap-5 px-5"
        // contentParentStyles="flex flex-col md:flex-row flex-wrap gap-5"
        // showSidebar={true}
        showPostsInFooter={false}
      >
         
        <BlogPageClientContent posts={posts} />
          


         {/* <JsonLd
          json={json}
          />  */}
      </BasePage>
    </>
  );
}
