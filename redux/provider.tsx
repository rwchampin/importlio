"use client";
import gsap from "gsap";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AiProvider, BlogProvider, CoreProvider, DebugProvider, ModalProvider } from '@/store'; // Import the BlogProvider
import { SessionProvider  } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
  
  const pathname: any = usePathname();
  const tl = gsap.timeline();
  useEffect(() => {
    const enteringElements = document.querySelectorAll('[data-enter]');
    tl.from('body', {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
    tl.to(enteringElements, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, []);

  useEffect(() => {
    // Extract the page name from the pathname
    if (pathname) {
      const pageName = pathname.replace(/(^\/|\/$)/g, "").replace(/\//g, "-");
      document.body.classList.add(`page-${pageName}`);
    }

    // store.dispastch(fetchBlogPosts());
  }, [pathname]);


  return (
    <SessionProvider>
      <CoreProvider>
        <AiProvider>
        <BlogProvider>
          <ModalProvider>

              {children}

          </ModalProvider>
        </BlogProvider>
        </AiProvider>
      </CoreProvider>

    </SessionProvider>
  );
}
