// components/GoogleAnalytics.tsx
"use client";

import Script from "next/script";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "./GtagHelper";

export default function GA({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: any;
}) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {

    // check if development or localhost
    if (process.env.NODE_ENV !== "production" || window.location.hostname.includes("localhost")) {
      return;
    }


    const url = pathname + searchParams.toString();

    pageview(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);


  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}
