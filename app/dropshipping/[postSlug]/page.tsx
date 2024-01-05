import ClientContent from "./client-content";

import Spinner from "@/app/components/Spinner";

export async function generateMetadata({ params }:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${params.postSlug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const post = await res.json();

  return {
    title: post.title,
    description: post.excerpt,
    image: post.featured_image,
    alternates: {
      // canonical: `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      image: post.featured_image
    },
  }
}

export default async function Page({
  params,
}: {
  params: { postSlug: string };
}) {


  // try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/posts/${params.postSlug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const post = await res.json();
    
  // } catch (error) {
  //   console.log(error);
  // }

  if(!post) {
    return <Spinner lg />
  }

  return <ClientContent post={post} />;
 
}

