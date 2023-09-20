import { getPost } from "@/lib/api";
import ClientContent from "./client-content";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = await getPost(slug);

  return {
    title: post.seo_title,
    description: post.seo_description,
    alternates: {
      canonical: `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
    },
    openGraph: {
      images: [post.featured_image],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPost(slug);

  // if(!post) return <Spinner />

  const json = {
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

  return <ClientContent post={post} json={json} />;
}
