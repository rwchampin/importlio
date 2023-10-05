"use client";
import Image from "next/image";

// import {useState } from 'react';
import Link from "next/link";
import logoSrc from '@/assets/logo/importlio-logo-100x100.png';
// import Spinner from '@/app/components/Spinner';

const LogoBlack = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <Link 
    href="/" className='logo h-[50px] w-[50px]'>
        {/* {isLoading && <Spinner className="ease-in duration-75" />} */}
        <Image
          priority
          src={logoSrc}
          height={50}
          width={50}
          alt="Bulk Amazon Product Shopify Importer"
          // onLoad={() => { setIsLoading((prev) => !prev)}} // Handle image load event
        /> 
    </Link>
  );
};

export default LogoBlack;
