

import { Section, TagCloud } from "@/components/common";
import { BasicPage } from "@/components/pages";
import { Sidebar } from "@/components/blog";
import dynamic from "next/dynamic";
import JsonLd from "@/components/common/JsonLd";
// gsap.registerPlugin(ScrollTrigger)

export default async function Page({ params }:any) {debugger
  const { slug } = params;
  // if(slug === 'tags' || slug === 'categories') 
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}`);
  const post = await res.json();

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

  return (
    <BasicPage
      showButton={false}
      customComponent={null}

    belowSubtitle={null}
      theme="light"
      title={post.title}
      subtitle={post.title}
      headline={post.published + " | " + post.readtime}
      shadowText={post.title}
      bg={post.featured_image}
      xPos={0}
      yPos={50}
    >
      <Section className="mb-10">
       <div className="flex gap-1 bg-red5">
	   <TagCloud data={post.tags} type="tags"/>
        {/* <TagCloud data={post.categories} type="categories" /> */}
	   </div>

        <div className="flex flex-row gap-5">
          <aside>
            <article dangerouslySetInnerHTML={{ __html: post.content }} />
          </aside>
          <aside>
            <Sidebar />
          </aside>
        </div>
      </Section>
      <JsonLd json={json} />
    </BasicPage>
  );
}
