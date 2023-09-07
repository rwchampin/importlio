import "@/assets/styles/cursor.css";
import "@/assets/styles/typography.css";

import "@/assets/styles/globals.css";

import CookieBanner from "@/components/utils/CookieBanner";
import localFont from "next/font/local";
import type { Metadata } from "next";

import Scroller from "@/components/utils/Scroller";
import GA from "@/components/utils/GA";
import AppProvider from "@/components/utils/AppProvider";

import Setup from "@/components/utils/Setup";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Cursor from "@/components/common/Cursor";
import NextTopLoader from "nextjs-toploader";
import { getRecentPosts } from "@/lib/api";


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

export const metadata: Metadata = {
  title: "Amazon Dropshipping Bulk Product Importer App for Shopify",
  description:
    "Bulk import Amazon Dropshipping Products into Shopify E-Commerce Stores. Source and Sell Profitable Dropshipping Products from Amazon",
  applicationName: "Importlio",
  referrer: "origin-when-cross-origin",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.importlio.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/og-image.jpg",
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const posts = await getRecentPosts();

  return (
    <html
      lang="en"
      className={`${apercu.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
       <GA GA_MEASUREMENT_ID={'G-V8X4P8V5SZ'} />
      <body suppressHydrationWarning>
     

        <AppProvider>
          <Scroller>
            <Header posts={posts} />
            {children}
            <Setup />

            <Footer />
          </Scroller>
          <Cursor />
          <CookieBanner />
          <NextTopLoader
            color="#000"
            height={4}
            // showSpinner={true}
          />
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
