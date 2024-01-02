// components/GoogleAnalytics.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = 'G-V8X4P8V5SZ';
export default function GA() {

  const pathname = usePathname();

  useEffect(() => {
    if(pathname.includes("localhost")) return;
    

    window.addEventListener("popstate", () => {
      ReactGA.send({ hitType: "pageview", page: pathname });
    });

    ReactGA.initialize(GA_MEASUREMENT_ID);

    return () => {
      window.removeEventListener("popstate", () => {
        ReactGA.send({ hitType: "pageview", page: pathname });
      });
    }

  }, []);

  // useEffect(() => {alert("GA.tsx");
  //   ReactGA.send({ hitType: "pageview", page: pathname });
  // }, []);


  return (
    <></>
  );
}
