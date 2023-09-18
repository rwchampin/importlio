"use client";

import { Button } from "@nextui-org/react";
import Back from "@/app/components/buttons/Back";
import BasePage from "@/app/components/BasePage";
export default function NotFound() {
  const CustomComponent:any = (
    <>
      <p className="mt-6 text-base leading-7 text-black">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button className="max-w-lg" href="/" variant="solid">
        Home
      </Button>
    </>
  );
  return (
    <BasePage
      title={"Page not found"}
      subtitle="Sorry, we couldn't find the page you're looking for."
      topLeftPageComponent={<Back />}
      headline="Try going back home"
      shadowText="404"
      customComponent={<CustomComponent />}
    ></BasePage>
  );
}
