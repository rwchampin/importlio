
import BasePage from '@/app/components/BasePage';
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { setShowRecentPostsInFooter } from "@/redux/features/core/coreSlice";
// import Section from "@/app/components/Section";
import type { Metadata } from "next";

import Card from "@/app/components/Card";

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


// const json = generatePageStructuredMarkup(metadata);
 

export default async function Page() {
  // let { posts } = useAppSelector((state) => state.blog);
  // const dispatch = useAppDispatch()
  // dispatch(setShowRecentPostsInFooter(false))
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts-preview`, {
    next: {
      revalidate: 10
    }
  });

  const {
    results
  } = await res.json();

  const posts = results;

  
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
         
          <div className='flex flex-col md:flex-row flex-wrap gap-5 px-5 items-center'>
      {posts && posts.length && posts.map((post: any) => {
        if(post.post_status === 'draft') return null

        return (
          <div className='w-full md:w-1/3'>
          <Card
            post={post}
            key={post.slug}
            variant="lg"
          />
          </div>
        )
      }
      )}
      </div>

      </BasePage>
    </>
  );
}
