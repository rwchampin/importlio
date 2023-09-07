"use client";
import TagCloud from "@/app/components/TagCloud";
import BasePage from "@/app/components/BasePage";


import JsonLd from "@/app/components/JsonLd";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPost } from "@/lib/api";

export default function Page() {
  const [post, setPost] = useState({} as any);
  const { slug } = useParams();
debugger
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(slug);
      debugger
      setPost(post);
    };

    fetchPost();
  }, [slug]);

  debugger
  const json = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.content,
    "url": `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
    "datePublished": post.published,
    "dateModified": post.updated,
    "author": {
      "@type": "Importlio Inc.",
      "name": "Importlio Inc."
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Importlio Inc.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/logo-black.svg",
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": post.featured_image,
    },
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "Blog",
      "name": "Importlio ecommerce tutorials",
      "url": "https://www.importlio.com/ecommerce-tutorials"
    }
  }

  // gsap.to(".fi", {
  // 	scrollTrigger: {
  // 		trigger: ".fi",
  // 		start: "top top",
  // 		end: "bottom top",
  // 		scrub: true,
  // 		pin: true,
  // 		// markers: true
  // 		pinSpacing: false
  // 	},
  // 	backgroundPosition: "0% -100%",
  // 	ease: "none"
  // })

  // const t:any = post.tags.map((tag:any, idx:number) => {
  //   debugger
  //   return (
  //     <span
  //       key={idx}
  //     >
  //       <Link
  //         href={`/ecommerce-tutorials/tags/${tag.slug}`}
  //         className='text-xs rounded-full bg-blue-3 text-blue-11 px-3 py-2' key={idx}
  //       >
  //         {tag.name}
  //       </Link>
  //     </span>
  //   );

  // })

  // const c:any = post.categories.map((cat:any, idx:number) => {
  //   debugger
  //   return (
  //     <span
  //       key={idx}
  //     >
  //       <Link
  //         href={`/ecommerce-tutorials/tags/${cat.slug}`}
  //         className='inline-block text-xs rounded-full bg-blue-3 text-blue-11 px-3 py-2' key={idx}>
  //         {cat.name}
  //       </Link>
  //     </span>
  //   );

  // })

  return (
    <BasePage
      title={post.title}
      subtitle={post.title}
      headline={post.headline}
      shadowText={post.title}
      bg={post.featured_image}
    >
      <div className="flex p-5">
        {/* {post.post_type.name} */}
 {/* <TagCloud data={post.tags} type="tags" /> 

        <TagCloud data={post.categories} type="categories" />  */}
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full p-5">
        <article
          className="flex-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <aside className="w-full lg:w-1/4">{/* <Sidebar /> */}</aside>
      </div>

      <JsonLd json={json} />
    </BasePage>
  );
}
