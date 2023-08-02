import Link from "next/link";
import { Badge,LazyLoad } from "@/components/common";
export default function FullImageCard({ post }) {
    const { title, slug, featured_image, content, published, tags, categories, post_type } = post;
  console.log(featured_image)
    return (
        <Link href={`/ecommerce-tutorial/${slug}`} className="drop-shadow-2xl flex-1 grow-1">
        <article
  className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
>
  <LazyLoad
    type="img"
    alt="Shopify Ecommerce Bulk Product Importer App for Amazon Dropshipping"
    dataSrc={featured_image}
    src=""
    className="absolute inset-0 h-full w-full object-cover m-0 p-0 not-prose"
  />

  <div
    className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
  >
    <div className="p-4 sm:p-6">
      <time datetime="2022-10-10" className="block text-xs text-white/90">
        {published}
      </time>


        <h3 className="mt-0.5 text-lg text-white">
            {title}
        </h3>


      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95" dangerouslySetInnerHTML={{__html:content}} />

        <div className="mt-3 flex gap-2">
            {tags.map((tag, idx) => {
                return (
                    <Badge key={idx} type="primary" className="mr-2">
                        {tag.name}
                    </Badge>
                );
            })}

            {categories.map((category, idx) => {
                return (
                    <Badge key={idx} type="info" className="mr-2">
                        {category.name}
                    </Badge>
                );
            })}

            <Badge type="info" className="mr-2">
                {post_type.name}
            </Badge>

            </div>

    </div>
  </div>
</article>
        </Link>
    );
}