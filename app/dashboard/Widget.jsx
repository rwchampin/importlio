"use client";
import {motion, AnimatePresence} from "framer-motion"
import { usePathname } from 'next/navigation'
export default function Widget({children }) {
	const pathname=usePathname()


	 

	return (
		<div
			key={{pathname}}
			className="p-5 rounded-lg bg-gray-500 h-auto self-center"
		>
			{children}
		</div>
	)
}