// import "@/assets/styles/awwwards.css";
import "@/assets/styles/cursor.css";
import "@/assets/styles/globals.css";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Provider from "@/redux/provider";
import { Setup } from "@/components/utils";

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
  cardImage: "/logo.png",
  robots: "follow, index",
  favicon: "/favicon.ico",
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
const DynamicScroller: any = dynamic(
  () => import("@/components/utils/Scroller"),
  { ssr: false }
);

const DynamicFooter:any = dynamic(() => import("@/components/common/Footer"), {
  ssr: false,
  });

  const DynamicNavbar:any = dynamic(() => import("@/components/common/Navbar"), { 
    ssr: false,
  });

  const DynamicCursor:any = dynamic(() => import("@/components/common/Cursor"), {
    ssr: false,
  });

  const DynamicGA = dynamic(() => import("@/components/utils/GA"), {
    ssr: false,
  });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

 
  return (
    <html
      lang="en"
      className={`h-full ${apercu.variable} ${montserrat.variable}`}
    >
      
      <body>
      <Provider>
      <Setup />
     

             <div className="fade flex flex-col min-h-screen">
         
         
             <DynamicNavbar /> 
            <DynamicScroller>
            
            <main className="flex-grow flex flex-col gap-5">
             
             
              {children}
              
            </main>
              <DynamicFooter /> 
            </DynamicScroller>
         
          
         
        </div>
        {/* <DynamicCursor size={10} /> */}
        </Provider>
      
      </body>
    </html>
  );
}
