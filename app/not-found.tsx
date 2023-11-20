


// import Back from "@/app/components/buttons/Back";
import BasePage from "@/app/components/BasePage";
import { Metadata } from "next";

import Link from "next/link";


export const metadata:Metadata = {
  'robots': 'noindex, nofollow',
  'title': 'Page not found',
}
export default function NotFound() {
  const CustomComponent:any = () => (
    <>
      <p className="mt-6 text-base leading-7 text-black">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link className="max-w-lg bg-button w-full rounded-lg flex items-center justify-center" href="/">
        Home
      </Link>
    </>
  );
  return (
    <BasePage
      title={"Page not found"}
      subtitle="Sorry, we couldn't find the page you're looking for."
      // topLeftPageComponent={<Back />}
      headline="Try going back home"
      shadowText="404"
      customComponent={<CustomComponent />}
    >

      <p>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
    </BasePage>
  );
}
