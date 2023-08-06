import Link from "next/link";
import { Badge, LazyLoad, TagCloud } from "@/components/common";

export default function FullImageCard({ post }) {
  const { title, slug, featured_image, content, published, tags, categories, post_type } = post;
  console.log(featured_image)
  return (
    <Link href={`/ecommerce-tutorials/${slug}`} className="rounded-xl overflow-hidden relative shadow drop-shadow-2xl flex-1 h-auto transition hover:shadow-lg">
      <article
        className="relative h-full w-full"
      >
        <LazyLoad
          type="img"
          alt="Shopify Ecommerce Bulk Product Importer App for Amazon Dropshipping"
          dataSrc={featured_image}
          src=""
          className="object-cover absolute top-0 bottom-0 inset-0 h-full w-full   m-0 p-0"
        />

        <div
          className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
        >
          <div className="p-4 sm:p-6">
            <div className="flex items-center">
              <Badge type="info" className="mr-2">
                {post_type.name}
              </Badge>
              <time datetime="2022-10-10" className="block text-xs text-white/90">
                {published}
              </time>
            </div>


            <h3 className="mt-0.5 text-lg text-white">
              {title}
            </h3>


            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95" dangerouslySetInnerHTML={{ __html: content }} />

            <div className="mt-3 flex gap-2">
              <TagCloud data={tags} className="bg-gray-300 shadow-xl" />
              <TagCloud data={categories} className="bg-gray-300 shadow-xl" />
            </div>


          </div>
        </div>
      </article>
    </Link>
  );
}