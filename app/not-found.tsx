


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
      <Link className="max-w-lg mt-3 bg-button h-input text-offwhite w-full rounded-lg flex items-center justify-center" href="/">
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

     
    </BasePage>
  );
}
