"use client";
import Image from "next/image";
import gsap from 'gsap/all';
import { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import logoSrc from '@/assets/logo/logo-black.svg';
import Spinner from '@/app/components/Spinner';

const LogoBlack = (props) => {
  const logoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const logo = logoRef.current;

    gsap.from(logo, {
      opacity: 0,
      duration: .5,
      ease: "expo.out",
    });
  }, []);


  return (
    <Link 
    ref={logoRef} 
    href="/" className='logo relative aspect-square h-[50px] w-[50px]'>
        {isLoading && <Spinner className="ease-in duration-75" />}
        <Image
          className={`z-100 ease-in duration-200 aspect-square ${isLoading ? 'opacity-0' : 'opacity-100'}`}// Set image
          priority
          src={logoSrc}
          fill="responsive"
          alt="Bulk Amazon Product Shopify Importer"
          onLoad={() => { setIsLoading((prev) => !prev)}} // Handle image load event
        /> 
    </Link>
  );
};

export default LogoBlack;
