"use client";
import {motion, AnimatePresence} from "framer-motion"
import { usePathname } from 'next/navigation'
export default function Widget({children, variants }) {
	const pathname=usePathname()


	 

	return (
		<motion.div
			key={pathname}

			variants={variants}
			className="p-5 rounded-lg bg-gray-500 h-auto self-center"
		>
			{children}
		</motion.div>
	)
}