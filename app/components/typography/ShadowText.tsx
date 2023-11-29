import cn from 'classnames'
import { ShadowTextProps } from '@/lib/constants'

export default function ShadowText({ 
	theme = 'dark',
	type,
	children,
	className,
	position = 'top',
	size = '30vh'
 }:ShadowTextProps) {
	const classes = cn(
		`font-montserrat text-[30vh] font-black z-100 w-auto h-auto [writing-mode:tb] bg-gradient-to-r from-transparent from-20% to-gray-400  bg-clip-text text-transparent break-words whitespace-nowrap ${className}`,
		{
			"top-0": position === "top",
			"absolute top-1/2 -translate-y-1/2": position === "center",
			"bg-gradient-to-t from-top from-10% to-gray-200 absolute" : type === "card",
			"to-black": theme === "dark",
			"to-gray-600": theme === "light",
			"fixed": type !== "card",
		}
	)
 
	return (
		    <div 
			className={classes}>
				{children}
			</div>
	)
}



