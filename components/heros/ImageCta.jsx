
import { LazyLoad } from "@/components/utils"
import { Panel } from "@/components/common";
export default function ImageCta({ title, description, image, cta }) {

  return (
    <Panel round>
      <div className="overflow-hidden bg-white dark:bg-gray-400 lg:flex lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
          <div className="h-64 object-fill lg:h-full">
            <LazyLoad
              type="video"
              className="m-0 p-0 overflow-hidden"
              src="https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/dash-video-grey.mp4"
              dataSrc={`https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/vids/dash-video.mp4`}
              alt="Shopify Amazon Dropshipping Product Importer App - Bulk import thousands of Amazon Dropshipping Products instantly!"
              />
          </div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <div className="text-[2rem] not-prose font-semibold text-gray-800 dark:text-black">
            {title}
          </div>

          <p className="mt-4 text-black dark:text-black mb-5 text-md leading-normal" dangerouslySetInnerHTML={{ __html: description }} />

          {cta}
        </div>
      </div>
    </Panel>
  );
}
