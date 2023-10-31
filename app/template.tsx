"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: -200, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="hidden"
      transition={{ 
        type: "linear",
        ease: "easeInOut",
        duration: 0.2,

     }}
    >
      {children}
    </motion.main>
  )
}