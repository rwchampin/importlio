import "@/assets/styles/awwwards.css";
import "@/assets/styles/cursor.css";
import "@/assets/styles/globals.css";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Provider from "@/redux/provider";
import { Navbar, Cursor, Footer } from "@/components/common";
import { Setup, GA } from "@/components/utils";

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
  url: "https://www.importlio.com",
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const DynamicScrollbar: any = dynamic(
    () => import("@/components/utils/Scrollbar"),
    { ssr: false }
  );

  return (
    <html lang="en" className="h-full">
      <GA />
      <body className="flex flex-col h-full">
        <div className="flex flex-col min-h-screen">
          {/* <Cursor /> */}
          <Provider>
            <Setup />
            <Navbar />
            <main className="flex-grow flex flex-col gap-5 bg-gray-100 py-8 px-6">
              {children}
              <DynamicScrollbar />
            </main>
          </Provider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
