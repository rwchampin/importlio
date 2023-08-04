// import "@/assets/styles/awwwards.css";
import "@/assets/styles/cursor.css";
import "@/assets/styles/typography.css";


import "@/assets/styles/globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { GA, Scroller } from "@/components/utils/";


import Provider from "@/redux/provider";
import { Setup } from "@/components/utils";
import { Header, Footer } from "@/components/common";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-montserrat",
  preload: true,
});

const apercu = localFont({
  src: [
    {
      path: "../assets/fonts/apercu-bold-pro.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/apercu-medium-pro.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/apercu-bold-pro.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-apercu",
  display: "swap",
  preload: true,
});

const meta = {
  title: "Amazon Dropshipping Bulk Product Importer App for Shopify",
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


 

const DynamicCursor: any = dynamic(() => import("@/components/common/Cursor"));


const CookieBanner: any = dynamic(
  () => import("@/components/utils/CookieBanner"),
  {
    ssr: false,
  }
);

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Provider>
    <html lang="en" className={`${apercu.variable} ${montserrat.variable}`}>
      <GA GA_MEASUREMENT_ID={process.env.GOOGLE_TRACKING_ID} />
      
      <body className={`pt-[4rem] bg-darkGray2`}>
      
          
            <Setup />
            <Header />
             <Scroller>
              {children}
              <Suspense fallback={<div>Loading...</div>}>
                <Footer />
              </Suspense>
            </Scroller>  


        <DynamicCursor />
        <CookieBanner />
        <NextTopLoader 
          color="#000"
          height={4}
          // showSpinner={true}

          
        />
      </body>
    </html>
    </Provider>
  );
};

export default RootLayout;
