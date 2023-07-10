import "@/assets/styles/awwwards.css";

import "@/assets/styles/globals.css";

import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Provider from "@/redux/provider";
import { Footer, Navbar } from "@/components/common";
import { Setup } from "@/components/utils";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

const apercu = localFont({
  src: "../assets/fonts/apercu-regular-pro.woff2",
  variable: "--font-apercu",
  display: "swap",
  preload: true,
});

const apercuMedium = localFont({
  src: "../assets/fonts/apercu-medium-pro.woff2",
  variable: "--font-apercu-medium",
  preload: true,
  display: "swap",
});

const apercuBold = localFont({
  src: "../assets/fonts/apercu-bold-pro.woff2",
  variable: "--font-apercu-bold",
  preload: true,
  display: "swap",
});

const meta = {
  title: "Amazon Dropshipping Bulk Product Import App for Shopify",
  description:
    "Bulk import Amazon Dropshipping Products into Shopify E-Commerce Stores. Source and Sell Profitable Dropshipping Products from Amazon",
  cardImage: "/logo.png",
  robots: "follow, index",
  favicon: "/favicon-96x96.ico",
  url: "https://importlio.com",
  type: "website",
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title,
  },
  twitter: {
    card: "summary_large_image",
    site: "@vercel",
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
  } 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white`}>
        <Provider>
          <Setup />
          <Navbar />
          <main className="px-3 md:px-5 max-w-5xl">
		  {children}
		  </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
