"use client";
import { Widget } from "@/components/auth";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "spring",
        bounce: 0.25,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.5,
        type: "spring",
        bounce: 0.25,
      },
    },
  };

  const widgets = [
    {
      name: "one",
      content: "one",
    },
    {
      name: "two",
      content: "two",
    },
  ];
  return (
    <div className="flex flex-col h-screen w-full flex-1 bg-red-900 rounded-lg p-5">
      <AnimatePresence>
        <motion.main
          key={pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-auto w-full flex-col gap-5 bg-red-300"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}