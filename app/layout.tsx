
import "@/assets/styles/cursor.css";
import "@/assets/styles/typography.css";

import "@/assets/styles/globals.css";

import CookieBanner from "@/components/utils/CookieBanner";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { GA, Scroller } from "@/components/utils/";
import Provider from "@/redux/provider";
import { Setup } from "@/components/utils";
import { Header, Footer, Cursor } from "@/components/common";
import NextTopLoader from "nextjs-toploader";


const montserrat = Montserrat({
  weight: [ '500', '900'],
  subsets: ["latin"],
  variable: "--font-montserrat",
  preload: true,
});

const apercu = localFont({
  src: [
    // {
    //   path: "../assets/fonts/apercu-bold-pro.woff2",
    //   weight: "500",
    //   style: "normal",
    // },
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

export const metadata: Metadata = {
  title: "Amazon Dropshipping Bulk Product Importer App for Shopify",
  description:
    "Bulk import Amazon Dropshipping Products into Shopify E-Commerce Stores. Source and Sell Profitable Dropshipping Products from Amazon",
  applicationName: "Importlio",
  referrer: "origin-when-cross-origin",
  keywords: ["Amazon dropshipping", "Product importer", "Shopify store integration", "Amazon affiliates", "Amazon associates", "Dropshipping automation", "E-commerce management", "Product synchronization", "CSV import", "Amazon URL import", "Affiliate marketing", "Shopify app", "Inventory management", "Product catalog", "Automated updates", "Affiliate commissions", "Shopifystore integration", "E-commerce growth", "Affiliate sales", "Streamlined importing", "Multi-channel selling", "Product syncing", "Inventory tracking", "Sales optimization", "Affiliate partnerships", "E-commerce tools", "Affiliate income", "Order fulfillment", "Profit margins", "Product sourcing"],
  colorScheme: "dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.importlio.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  // openGraph: {
  //   images: '/dark/favicon.ico',
  // },
};

 
 

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

            <Footer />
          </Scroller>

          <Cursor />
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
