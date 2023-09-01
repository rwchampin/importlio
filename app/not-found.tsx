"use client";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import Primary  from "@/app/components/buttons/Button";
import Back from "@/app/components/buttons/Back";
import BasePage from "@/app/components/BasePage"
export default function NotFound() {
  const router = useRouter();
  const Btn = () => (<Primary
  className="max-w-lg"
    href="/"
  variant="solid"
 >
  Home
</Primary>)
  return ( 
    <BasePage
      title={"Page not found"}
      subtitle="Sorry, we couldn't find the page you're looking for."
      topLeftPageComponent={<Back />}
      headline="Try going back home"
      shadowText="404"
      shadowTextPosition="center"
      showButton={false}
      customComponent={ <Btn />}
		
    >

        <p className="mt-6 text-base leading-7 text-black">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
          
         


    </BasePage>
  );
}
