// components/GoogleAnalytics.tsx
"use client";

import Script from "next/script";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "./GtagHelper";

const GA_MEASUREMENT_ID = 'G-V8X4P8V5SZ';
export default function GA() {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {

    // check if development or localhost
    if (process.env.NODE_ENV !== "production" || window.location.hostname.includes("localhost")) {
      return;
    } 


    const url = pathname + searchParams.toString();

    pageview('G-V8X4P8V5SZ', url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);


  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-V8X4P8V5SZ`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-V8X4P8V5SZ');
                `,
        }}
      />
    </>
  );
}
