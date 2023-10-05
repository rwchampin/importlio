import "@/assets/styles/cursor.css";
import "@/assets/styles/typography.css";

import "@/assets/styles/globals.css";

import CookieBanner from "@/components/utils/CookieBanner";
import localFont from "next/font/local";
import type { Metadata } from "next";

import { generatePageStructuredMarkup } from "@/lib/functions";
import JsonLd from "@/app/components/JsonLd";
import Scroller from "@/components/utils/Scroller";
import GA from "@/components/utils/GA";
import Provider from '@/components/utils/provider';

import Setup from "@/components/utils/Setup";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Cursor from "@/components/common/Cursor";
import NextTopLoader from "nextjs-toploader";
import Modal from "@/components/common/Modal";
import EmailForm from "@/components/forms/EmailForm";

const montserrat = localFont({
  src: "../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
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
      path: "../assets/fonts/apercu-bold-pro.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-apercu",
  display: "swap",
  preload: true,
});
const title =  "Amazon Dropshipping Bulk Product Importer App for Shopify"
const description = "Fill your Shopify store with products from the best dropshipping suppliers around the world. Bulk import Amazon dropshipping products into Shopify with Importlio."

export const metadata: Metadata = {
  title: title,
  description: description,
  referrer: "origin",
  keywords: [
    "Amazon dropshipping",
    "Product importer",
    "Shopify store integration",
    "Amazon affiliates",
    "Amazon associates",
    "Dropshipping automation",
    "E-commerce management",
    "Product synchronization",
    "CSV import",
    "Amazon URL import",
    "Affiliate marketing",
    "Shopify app",
    "Inventory management",
    "Product catalog",
    "Automated updates",
    "Affiliate commissions",
    "Shopifystore integration",
    "E-commerce growth",
    "Affiliate sales",
    "Streamlined importing",
    "Multi-channel selling",
    "Product syncing",
    "Inventory tracking",
    "Sales optimization",
    "Affiliate partnerships",
    "E-commerce tools",
    "Affiliate income",
    "Order fulfillment",
    "Profit margins",
    "Product sourcing",
  ],
  colorScheme: "dark",
 
  metadataBase: new URL("https://www.importlio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: title,
    description: description,
    url: "https://www.importlio.com",

    images: "https://www.importlio.com/og-image.jpg",
  },
};



const RootLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
   
    <html
      lang="en"
      className={`${apercu.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
       <GA GA_MEASUREMENT_ID={'G-V8X4P8V5SZ'} />
      <body suppressHydrationWarning>
      <Provider>

       
        <Setup />
           <Scroller>
            <Header />
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
         
         <Modal>
    <EmailForm />
  </Modal>
      </Provider>
      <JsonLd
        json={generatePageStructuredMarkup({
          description
        })}
      />
      </body>
    </html>
   
  );
};

export default RootLayout;


