"use client";
import TagCloud from "@/app/components/TagCloud";
import BasePage from "@/app/components/BasePage";


import JsonLd from "@/app/components/JsonLd";
import { useEffect, useState } from "react";

import { getPost } from "@/lib/api";
import Spinner from "@/app/components/Spinner";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(slug);
      
      setPost(post);
    };

    if(!post) fetchPost();
  }, [slug]);

if(!post) return <Spinner />

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
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Importlio",
          "item": "https://www.importlio.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ecommerce Tutorials",
          "item": "https://www.importlio.com/ecommerce-tutorials"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
          "image": post.featured_image,
          "description": post.excerpt || post.content,
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
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "Blog",
            "name": "Importlio ecommerce tutorials",
            "url": "https://www.importlio.com/ecommerce-tutorials"
          },

        }
      ]
    }
  }
 
  return (
    <BasePage
      theme={post.theme}
      title={post.title}
      subtitle={post.title}
      headline={post.headline}
      shadowText={post.title}
      bg={post.featured_image}
    >
      <div className="flex p-5">
        {/* {post.post_type.name} */}
 <TagCloud data={post.tags} type="tags" /> 

        <TagCloud data={post.categories} type="categories" /> 
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
