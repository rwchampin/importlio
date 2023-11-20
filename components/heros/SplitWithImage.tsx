import Image from "next/image";
import Link from "next/link";
export default function SplitWithImage({
  dir = "ltr",
  imgAlt = "",
  imgSrc = "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply",
  title,
  subtitle,
  paragraph,
  ctaText,
  ctaLink,
}: any) {
  return (
    <div className="relative flex flex-col lg:flex-row items-stretch justify-stretch h-auto w-full lg:max-w-[90vw] mx-auto">
      <div
        className={`relative flex items-center justify-center lg:w-1/2 ${
          dir === "rtl" ? "lg:order-last" : "lg:order-first"
        }`}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          // sizes="100vw"

      width={500}
      height={500}
        />
      </div>
      <div className="w-full lg:w-1/2 p-5">
        <div className="text-center flex flex-col items-center justify-center h-full w-full lg:w-3/4 lg:text-left">
          <h2 className="text-5xl font-black text-black font-montserrat">
            {title}
          </h2>
          {subtitle && (
            <h4 className="mt-2 text-2xl font-bold tracking-tight text-gray-500">
              {subtitle}
            </h4>
          )}
          <p className="mt-3 text-md text-gray-600 font-light leading-6">{paragraph}</p>

          <Link
            href={ctaLink}
            className="bg-button rounded-xl h-input w-full max-w-2xl mx-auto text-white flex items-center justify-center mt-5"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
