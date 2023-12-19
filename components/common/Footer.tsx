import LogoBlack from "@/components/common/LogoBlack";
import SocialIcons from "@/app/components/SocialIcons";

export default function Footer() {
  return (

      <footer
        className="relative shadow-xl p-5 bg-gray-1 shadow-top dark:bg-offgray text-black z-50"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:-mx-6 md: lg:w-2/5">
            <div className="px-5 text-center flex items-center flex-col justify-center md:block md:text-left">
              <LogoBlack />

              <p className="max-w-sm mt-2 text-xs dark:text-white">
                The world&apos;s first Amazon Dropshipping Bulk Product Importer
                & management plugin.
              </p>
              <SocialIcons />
            </div>
          </div>

          <div className="mt-0 lg:flex-1">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div className="text-center md:text-left flex-1">
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

              <div className="text-center md:text-left flex-1">
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

              <div className="text-center md:text-left flex-1">
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

              <div className="text-center md:text-left flex-1">
                <h3 className="text-black font-bold uppercase dark:text-black">
                  Contact
                </h3>

                <span className="block mt-2 text-sm text-black dark:text-black hover:underline">
                  support@importlio.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr
          className="h-[1px] my-6 bg-black border-none dark:bg-black"
          aria-hidden="true"
        />

        <p className="text-center text-xs text-black dark:text-black font-bold">
          &copy; Importlio 2023 All rights reserved
        </p>
      </footer>
  );
}
