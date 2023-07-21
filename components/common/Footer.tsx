import dynamic from "next/dynamic";

const ColorSwitch:any = dynamic(() => import("@/components/common/ColorSwitch"));
const SocialIcons:any = dynamic(() => import("@/components/common/SocialIcons"));
const LogoBlack:any = dynamic(() => import("@/components/common/logo/LogoBlack"));

export default function Footer() {
  return (
    <>
      <footer className="bg-offwhite dark:bg-offgray text-black">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">

                <LogoBlack size="40" />


              <p className="max-w-sm mt-2 dark:text-white">
                The world&apos;s first Amazon Dropshipping Bulk Product Importer & management plugin.
              </p>

              <SocialIcons />
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-black uppercase dark:text-black font-bold">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"

                >
                  community
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"

                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-black font-bold uppercase dark:text-black">
                  Blog
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"

                >
                  Tec
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"
                >
                  Music
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"

                >
                  Videos
                </a>
              </div>

              <div>
			  <h3 className="text-black font-bold uppercase dark:text-black">

                  Products
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"

                >
                  Mega cloud
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"

                >
                  Aperion UI
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"

                >
                  Meraki UI
                </a>
              </div>

              <div>
			  <h3 className="text-black font-bold uppercase dark:text-black">

                  Contact
                </h3>
                <span 
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"
				>
                  +1 526 654 8965
                </span>
                <span 
                  className="block mt-2 text-sm text-black dark:text-black hover:underline"
				>
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-black border-none dark:bg-black" />

        <div>
          <p className="text-center text-black dark:text-black font-bold">
            &copy; Importlio 2023 All rights reserved
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
