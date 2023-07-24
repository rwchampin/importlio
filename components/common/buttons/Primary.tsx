"use client";
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic';

interface Props {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | any | undefined;
    className?: string;
    isLoading?: boolean;
    isMobile?: boolean;
    onClick?: () => {};
    theme: "light" | "dark"
}

const Spinner:any = dynamic(() => import('@/components/common/Spinner'), {
    ssr: false
});
export default function Primary({ children="Submit", type="button", className, isLoading, isMobile, theme, onClick }:Props) {
    let classes:string = "bg-offgray text-offwhite font-apercu font-bold uppercase hover:shadow-2xl hover:drop-shadow-2xl hover:cursor-pointer h-[46px] px-6 py-2 max-w-lg text-sm w-full"

    classes += className ? ` ${className}` : '';
    

    return (
        <motion.button
        type={type}
        whileHover={{
            scale: 1.02,
            transition: {
                type: 'spring',
                duration: .3
            }
        }}
        whileTap={{
            scale: .9,
            transition: {
                duration: .3
            }
        }}
        onClick={onClick}
        className={classes + `color-${theme === "light" ? "offwhite":"offgray"} text-sm font-bold max-w-lg bg-${theme === "light" ? "offgray" : "offwhite"}`}
        >
            {isLoading ? Spinner : children}
        </motion.button>
    );
}