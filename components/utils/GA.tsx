// components/GoogleAnalytics.tsx
"use client";

import ReactGA from "react-ga4";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

const GA_MEASUREMENT_ID = 'G-V8X4P8V5SZ';
export default function GA() {
  const [url, setUrl] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {


    

    window.addEventListener("popstate", () => {
      ReactGA.send({ hitType: "pageview", page: pathname });
    });

    ReactGA.initialize(GA_MEASUREMENT_ID);


  }, []);

  // useEffect(() => {alert("GA.tsx");
  //   ReactGA.send({ hitType: "pageview", page: pathname });
  // }, []);


  return (
    <></>
  );
}
