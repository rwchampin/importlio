"use client"
import { getPosts } from "@/lib/api";
import { unSlugify } from "@/lib/functions";
import { useSearchParams } from 'next/navigation'
import BasePage from '@/app/components/BasePage';
import { useAppDispatch } from "@/redux/hooks";
import { setShowRecentPostsInFooter } from "@/redux/features/core/coreSlice";
import PostCardSkeleton from "@/app/components/skeletons/PostCardSkeleton";
import Section from "@/app/components/Section";
import Card from '@/app/components/Card';
import JsonLd from "@/app/components/JsonLd";
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
  "url": "https://www.importlio.com/blog",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Importlio - Amazon Dropshipping Bulk Product Importer & Management App",
    "url": "https://www.importlio.com"
  }
}

 
const getPostsByQueryParams = async (type:string, name:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${type}/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json();
  return data;
}
 

export default function Page() {
  const dispatch = useAppDispatch()
  dispatch(setShowRecentPostsInFooter(false))
  const [posts, setPosts] = useState([])
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const name = searchParams.get('name')
  
  useEffect(() => {
    const getData = async () => {
      let data;
      if (type && name) {
        data = await getPostsByQueryParams(type, name)
      } else {
        data = await getPosts()
      }
      return data;
    }

    getData().then((data:any) => {
      setPosts(data)
    })
  }, [type, name])



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
        {/* <Section className="p-5 flex flex-col gap-5 lg:flex-row"> */}

            {posts.map((post:any, idx:number) => {
              return (
                    <Suspense fallback={<PostCardSkeleton />}>
                     <Card key={idx} post={post} />
                    </Suspense>


              );
            })}

 
        {/* </Section> */}
        <JsonLd
          json={json}
          />
      </BasePage>
    </>
  );
}
