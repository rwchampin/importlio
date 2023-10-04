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
		`font-montserrat font-black z-100 w-auto h-auto [writing-mode:tb] text-[30vh] bg-gradient-to-r from-transparent from-20% to-gray-400  bg-clip-text text-transparent break-words whitespace-nowrap ${className}`,
		{
			"text-[30vh] absolute top-0": position === "top",
			"absolute top-1/2 -translate-y-1/2": position === "center",
			"tbg-gradient-to-r from-transparent from-20% to-black absolute" : type === "card",
			"to-black": theme === "dark",
			"to-gray-600": theme === "light",
		}
	)
 
	return (
		    <div 
			className={classes}>
				{children}
			</div>
	)
}



