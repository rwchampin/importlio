
import Link from 'next/link'
export default function Badge({ type, href, showClose, size=1, children, className, ...props }) {
	const cl = 	`self-start shadow-xl px-3 py-1 text-${size} text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60`
								
				if(!href && !type) return (
								<span
									className={cl}
								>
									{children}
								</span>
				)
        return (
                <Link
									href={`/ecommerce-tutorials/${type}/${href}`}
									className={cl}
                >
									{children}
                </Link>

        )

}