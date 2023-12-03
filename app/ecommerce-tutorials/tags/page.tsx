import BasePage from "@/app/components/BasePage";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce Dropshipping Tags",
  description:
    "A list of all the tags used in our Amazon dropshipping tutorials",
  keywords: [
    "Amazon dropshipping",
    "Product importer",
    "Shopify store integration",
    "Amazon affiliates",
    "Amazon associates",
    "Dropshipping automation",
  ],
};

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/tags/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { results } = await res.json();

  return (
    <BasePage
      title="Dropshipping Tags"
      subtitle="Browse ecommerce tutorials by tag."
      headline="Tags"
      shadowText="Tags"
      size="md"
    >
      <ul className="flex flex-col gap-5 p-5 w-full max-w-[90vw] mx-auto">
        {results.map((post: any) => (
          <li key={post.id}>
            <Link href={`/ecommerce-tutorials/tags/${post.slug}`}>
              {post.name}
            </Link>
          </li>
        ))}
      </ul>
    </BasePage>
  );
}
