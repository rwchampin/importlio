import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function ImageCta({ title, description, image, cta }) {
  const DynamicVideo = useMemo(() => dynamic(() => import("@/components/common/VideoPlayer")), []);

  return (
    <section className="w-full lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-400 lg:flex lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
          <div className="h-64 object-fill lg:h-full p-5">
            <DynamicVideo src={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/dash-video.mp4`} />
          </div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-black md:text-3xl">
            {title}
          </h2>

          <p className="mt-4 text-black dark:text-black mb-5">
            {description}
          </p>

          {cta}
        </div>
      </div>
    </section>
  );
}
