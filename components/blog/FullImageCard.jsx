import Link from "next/link";

// import useTheme from "@/hooks/useTheme";
import { TagCloud } from "@/components/common";
import LazyLoad from "@/components/utils/LazyLoad";
export default function FullImageCard({ post }) {
  // const { getAlt } = useTheme()
  const { title, slug, featured_image, excerpt,shadow_text,subtitle, headline, published, tags, categories, post_type } = post;

  return (

   
      <article
    className="w-full flex-1 md:max-w-[calc(50%-1rem)] xl:max-w-[calc(33.33%-1rem)] rounded-xl overflow-hidden relative shadow drop-shadow-2xl h-auto transition hover:shadow-lg">
        <Link href={`/ecommerce-tutorials/${slug}`}>
         <LazyLoad
          type="img"
          // alt={getAlt()}
          src={featured_image}
          data-src={'https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/img/placeholder.jpg'}
          className="object-cover absolute top-0 bottom-0 inset-0 h-full w-full   m-0 p-0"
        /> 
        </Link>
        <div
          className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
        >
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-5">
              <time dateTime="2022-10-10" className="block text-xs text-white/90">
                {published}
              </time>
            </div>

            <div className=" text-white font-bold font-apercu text-xxs">{headline}</div>
            <Link href={`/ecommerce-tutorials/${slug}`}>
            <h3 className="text-heading-3 text-White font-montserrat uppercase relative z-100 whitespace-nowrap">
              {title}
            </h3>
            </Link>
            <div className="text-heading-4 font-bold text-gray-400">
              {subtitle}
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              {excerpt}
            </p>

                <TagCloud type="tags" data={[...tags]} />
                <TagCloud type="categories" data={[...categories]} />


          </div>
        </div>
        <div className="shadow-text small">
        {shadow_text}
      </div>
      </article>
      

  );
}