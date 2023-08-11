import Link from "next/link";
import { badgeTypes } from "@/constants";
import { Badge, LazyLoad, TagCloud } from "@/components/common";
import useTheme from '@/hooks/useTheme'
export default function FullImageCard({ post }) {
  const { getAlt } = useTheme()
  const { title, slug, featured_image, excerpt,shadow_text,subtitle, headline, published, tags, categories, post_type } = post;
  debugger
  return (
    <Link 
    href={`/ecommerce-tutorials/${slug}`} 
    className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1rem)] rounded-xl overflow-hidden relative shadow drop-shadow-2xl h-auto transition hover:shadow-lg">
      <article
        className="relative h-full w-full"
      >
        <LazyLoad
          type="img"
          alt={getAlt()}
          dataSrc={featured_image}
          // src={'https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/img/placeholder.jpg'}
          className="object-cover absolute top-0 bottom-0 inset-0 h-full w-full   m-0 p-0"
        />

        <div
          className="relative h-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
        >
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-5">
                <span className="text-xs px-3 py-1 bg-gray-dark-5 text-gray-11 rounded-full uppercase">
                {post_type.name}
              </span>
              <time datetime="2022-10-10" className="block text-xs text-white/90">
                {published}
              </time>
            </div>

            <div className=" text-white font-bold font-apercu text-xxs">{headline}</div>
            <h3 className="text-heading-3 text-black font-montserrat uppercase relative z-100">
              {title}
            </h3>
            <div className="text-heading-4 font-bold text-gray-400">
              {subtitle}
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95" dangerouslySetInnerHTML={{ __html: excerpt }} />

              {/* <TagCloud data={[...tags, ...categories]} /> */}

          </div>
        </div>
      </article>
      <div className="shadow-text small">
        {shadow_text}
      </div>
    </Link>
  );
}