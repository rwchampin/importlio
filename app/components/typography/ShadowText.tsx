import cn from 'classnames'
import { ShadowTextProps } from '@/lib/constants'

export default function ShadowText({ 
	theme = 'dark',
	type,
	children,
	position = 'top',
	size = '30vh'
 }:ShadowTextProps) {
	const classes = cn(
		`font-montserrat font-black w-auto h-auto [writing-mode:tb] text-[${size}] bg-gradient-to-r from-transparent from-20% bg-clip-text text-transparent break-words whitespace-nowrap`,
		{
			"fixed top-0": position === "top",
			"fixed top-1/2 -translate-y-1/2": position === "center",
			'text-[11vh] bg-gradient-to-r from-transparent from-20% absolute left-0' : type === "card",
			"to-black": theme === "light",
			"to-gray-300": theme === "dark",
		}
	)
 
	return (
		    <div 
			className={classes}>
				{children}
			</div>
	)
}



