// import {Image} from "@nextui-org/react";

import { classNames } from "@/lib/functions";
export default function Statistic({ statistics }: any) {
  return (
  <>
    {statistics.map((statistic: any, index: any) => (
    <div
      key={statistic.name}
      className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
    >
      <div
        className={classNames(
          index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-8 xl:col-start-9",
          "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
        )}
      >
        <h3 className="text-heading-3 font-black font-montserrat text-gray-900">{statistic.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{statistic.description}</p>
      </div>
      <div
        className={classNames(
          index % 2 === 0 ? "lg:col-start-6 xl:col-start-5" : "lg:col-start-1",
          "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
        )}
      >
        {/* <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
          <img

            src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            alt={statistic.name}
            className="object-cover object-center"
          />
        </div> */}
      </div>
    </div>
    ))}
    </>
  );
}
