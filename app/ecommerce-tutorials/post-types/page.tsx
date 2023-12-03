import BasePage from "@/app/components/BasePage";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dropshipping Post Types from Importlio",
  description:
    "A list of all the post types used in our dropshipping tutorials",
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/post-types/`);

  const { results } = await res.json();

  return (
    <BasePage
      title="Dropshipping Post Types"
      subtitle="Browse ecommerce tutorials by post type."
      headline="Post Types"
      shadowText="Post Types"
      size="md"
    >
      <ul
        className="flex flex-col gap-5 p-5 w-full max-w-[90vw] mx-auto"
      >
        {results.map((postType: any) => (
          <li key={postType.id}>
            <Link
              href={`/ecommerce-tutorials/post-types/${postType.slug}`}
              >
              {postType.name}
              </Link>
          </li>
        ))}
      </ul>
    </BasePage>
  );
}
