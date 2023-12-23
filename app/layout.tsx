import "@/assets/styles/cursor.css";
import "@/assets/styles/typography.css";

import "./globals.css";


import Navigation from "@/components/common/Navigation";
import type { Metadata } from "next";
import localFont from "next/font/local";


import JsonLd from "@/app/components/JsonLd";
import Scroller from "@/components/utils/Scroller";
import { generatePageStructuredMarkup } from "@/lib/functions";

import Provider from "@/redux/provider";

import Setup from "@/components/utils/Setup";

// import Cursor from "@/components/common/Cursor";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";

// import Mouse from "@/app/components/Mouse"
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
const title = "Amazon Product Importer App for Shopify";
const description =
  "Fill your Shopify store with dropshipping products from Amazon.  Bulk import Amazon dropshipping products into Shopify with Importlio.";

export const metadata: Metadata = {
  title: title,
  description: description,
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
  // colorScheme: "dark",

  metadataBase: new URL("https://www.importlio.com"),
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
      lang="en-US"
      className={`${apercu.variable} ${montserrat.variable}`}
      suppressHydrationWarning={true}
    >
      <body>
        <Provider>
          <Navigation />
          
            {children}
            <Footer />

          {/* <Cursor /> */}

          {/* <NextTopLoader
            showSpinner={false}
            color="#000"
            height={4}
            // showSpinner={true}
          /> */}
          <JsonLd
            json={generatePageStructuredMarkup({
              description,
            })}
          />

          <Suspense>
          <Setup />
          </Suspense>
          {/* <Debug /> */}
        </Provider>
        <Scroller />
      </body>
      
    </html>
  );
};

export default RootLayout;
