"use client";
import Link from "next/link";
import { Section } from "@/components/common";
import { BsArrowLeft } from "react-icons/bs";
import { Primary } from "@/app/_components/buttons";
// import { ParticleText } from "@/app/components";
import { BasicPage } from "@/components/pages";
export default function NotFound() {
  // const customComponent = (
  //   <ParticleText
  //     mobile="Page\nnot\nfound"
  //     desktop="Page not found"
  //     colors={["#800000", "#FF0000"]}
  //   />
  // );

  return ( 
    <BasicPage
      title={"Page not found"}
      subtitle="Sorry, we couldn't find the page you're looking for."
      headline="Try going back home"
      shadowText="404"
      showButton={false}

		
    >
      {/* <Section>
        <p className="mt-6 text-base leading-7 text-black">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">Go back home</Link>
          <Primary href="/" className="text-sm font-semibold text-gray-900">
            Contact support <BsArrowLeft />
          </Primary>
        </div>
      </Section> */}
    </BasicPage>
  );
}
