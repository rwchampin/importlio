
import ClientContent from "./client-content";



export default async function Page({ params }: { params: { postSlug: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${params.postSlug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const post = await res.json();






  const renderJsonLd = (post:any) => {
    if (!post) return {}
    return {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || post.content,
    url: `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
    datePublished: post.published,
    dateModified: post.updated,
    author: [
      {
        "url": "https://www.importlio.com",
        "@type": "Organization",
        name: "Importlio Inc.",
      }
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Importlio Inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/logo-black.svg",
      },
    },
    image: {
      "@type": "ImageObject",
      url: post.featured_image,
    },
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: "Importlio ecommerce tutorials",
      url: "https://www.importlio.com/ecommerce-tutorials",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Importlio",
          item: "https://www.importlio.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ecommerce Tutorials",
          item: "https://www.importlio.com/ecommerce-tutorials",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
          image: post.featured_image,
          description: post.excerpt || post.content,
          datePublished: post.published,
          dateModified: post.updated,
          author: {
            "@type": "Importlio Inc.",
            name: "Importlio Inc.",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
          },
          publisher: {
            "@type": "Organization",
            name: "Importlio Inc.",
            logo: {
              "@type": "ImageObject",
              url: "https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/logo-black.svg",
            },
          },
          inLanguage: "en-US",
          isPartOf: {
            "@type": "Blog",
            name: "Importlio ecommerce tutorials",
            url: "https://www.importlio.com/ecommerce-tutorials",
          },
        },
      ],
    },
  };
  }

  const json = renderJsonLd(post);

  return <ClientContent post={post} json={json} />;
}
