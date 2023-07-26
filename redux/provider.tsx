"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
    const pathname: any = usePathname();


    useEffect(() => {

      // Extract the page name from the pathname
      if (pathname) {

    const pageName = pathname
      .replace(/(^\/|\/$)/g, "")
      .replace(/\//g, "-");
        document.body.classList.add(`page-${pageName}`);
      }
    }, [pathname]);


  return <Provider store={store}>{children}</Provider>;
}
