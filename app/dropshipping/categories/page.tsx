import type { Metadata } from "next";
import BasePage from "@/app/components/BasePage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce Dropshipping Categories",
  description:
    "A list of all the categories used in our Amazon dropshipping tutorials",
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/categories/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { results } = await res.json();

  return (
    <BasePage
      title="Shopify Dropshipping Categories"
      subtitle="A list of all the categories used in our Amazon dropshipping tutorials"
      headline="Dropshipping Categories"
      shadowText="Posts by Category"
      size="md"
    >
      <ul className="flex flex-col gap-5 p-5 w-full max-w-[90vw] mx-auto">
        {results.map((post: any) => (
          <li key={post.id}>
            <Link
              href={`/ecommerce-tutorials/categories/${post.slug}`}
            >
              {post.name}
            </Link>
          </li>
        ))}
      </ul>
    </BasePage>
  );
}
