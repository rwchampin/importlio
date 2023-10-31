import ClientContent from "./client-content";


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
    image: post.mobile_image,
    alternates: {
      canonical: `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      image: post.mobile_image,
    },
  }
}

export default async function Page({
  params,
}: {
  params: { postSlug: string };
}) {
  let post:any = false;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/posts/${params.postSlug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

     post = await res.json();

    
  } catch (error) {
    console.log(error);
  }


  return <ClientContent post={post} />;
 
}
