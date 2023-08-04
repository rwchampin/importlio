"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { useEffect, useState, useLayoutEffect } from "react";
import { BlogProvider, CoreProvider } from '@/store'; // Import the BlogProvider

// import { fetchBlogPosts } from "@/redux/slices/blogPostSlice"; // Import your fetchBlogPosts action

interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
  const pathname: any = usePathname();

  useEffect(() => {
    // Extract the page name from the pathname
    if (pathname) {
      const pageName = pathname.replace(/(^\/|\/$)/g, "").replace(/\//g, "-");
      document.body.classList.add(`page-${pageName}`);
    }

    // store.dispastch(fetchBlogPosts());
  }, [pathname]);


  return (
    <Provider store={store}>
      <CoreProvider>
        <BlogProvider>{children}</BlogProvider>
      </CoreProvider>
    </Provider>
  );
}
