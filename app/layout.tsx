
// import "@/assets/styles/awwwards.css";
import "@/assets/styles/cursor.css";
import "@/assets/styles/typography.css";

import "@/assets/styles/globals.css";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Provider from "@/redux/provider";
import {Setup} from "@/components/utils";
import { Header } from "@/components/common";


const montserrat = Montserrat({
  weight:  "900",
  subsets: ["latin"],
  variable: "--font-montserrat",
  preload: true,
});

const apercu = localFont({
  src: [{
    path: "../assets/fonts/apercu-bold-pro.woff2",
    weight: '500',
    style: 'normal'
  },{
    path: "../assets/fonts/apercu-medium-pro.woff2",
    weight: '600',
    style: 'normal'
  },{
    path: "../assets/fonts/apercu-bold-pro.woff2",
    weight: '800',
    style: 'normal'
  }],
  variable: "--font-apercu",
  display: "swap",
  preload: true,
});
 
const meta = {
  title: "Amazon Dropshipping Bulk Product Import App for Shopify",
  description:
    "Bulk import Amazon Dropshipping Products into Shopify E-Commerce Stores. Source and Sell Profitable Dropshipping Products from Amazon",
  // cardImage: "../assets/img/PNG/logo-greyhdpi.png",
  robots: "follow, index",
  favicon: "/favicon.ico",
  url: "https://www.importlio.com",
  type: "website",
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  // cardImage: meta.cardImage,
  // robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  // openGraph: {
  //   url: meta.url,
  //   title: meta.title,
  //   description: meta.description,
  //   // cardImage: meta.cardImage,
  //   type: meta.type,
  //   site_name: meta.title,
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@vercel",
  //   title: meta.title,
  //   description: meta.description,
  //   // cardImage: meta.cardImage,
  // },
};
const DynamicScroller: any = dynamic(
  () => import("@/components/utils/Scroller"),
  { ssr: false }
);

const DynamicFooter:any = dynamic(() => import("@/components/common/Footer"), {
  ssr: false,
  });

  

  const DynamicCursor:any = dynamic(() => import("@/components/common/Cursor"), {
    ssr: false,
  });

  const DynamicGA:any = dynamic(() => import("@/components/utils/GA"), {
    ssr: false,
  });
const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {



 
  return (
    <html lang="en" className={`${apercu.variable} ${montserrat.variable}`}>
      <body className={`pt-[4rem]`}>
        <Provider>
          <Setup />
          <Header />

          <DynamicScroller>
            <main className="flex flex-col">{children}</main>

            <DynamicFooter />
            <DynamicCursor size={10} />
          </DynamicScroller>
        </Provider>
        <DynamicGA GA_TRACKING_ID={"G-V8X4P8V5SZ"} />
      </body>
    </html>
  );
}

export default RootLayout;