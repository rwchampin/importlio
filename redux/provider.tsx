"use client";
import gsap from "gsap";
import { store } from "./store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {  BlogProvider, CoreProvider, ModalProvider } from '@/store'; // Import the BlogProvider

import { Provider } from "react-redux";
interface Props {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: Props) {
  
  const pathname: any = usePathname();
  const tl = gsap.timeline();
  useEffect(() => {
    const enteringElements = document.querySelectorAll('[data-enter]');
    // tl.from('body', {
    //   opacity: 0,
    //   duration: 0.3,
    //   ease: 'power2.out',
    // });
    tl.to(enteringElements, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }, []);

 


  return (
      <Provider store={store}>

      <CoreProvider>
     

          <ModalProvider>

              {children}

          </ModalProvider>

    
      </CoreProvider>


      </Provider>
  );
}
