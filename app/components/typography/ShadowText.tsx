import cn from 'classnames'
import { ShadowTextProps } from '@/lib/constants'

export default function ShadowText({ 
	children,
	position = 'top',
	size = '30vh'
 }:ShadowTextProps) {
	
	const classes = cn(
		`font-montserrat font-black fixed w-auto h-auto [writing-mode:tb] text-[30vh] bg-gradient-to-r from-transparent from-20% to-gray-300 bg-clip-text text-transparent break-words whitespace-nowrap`,
		{
			"top-0": position === "top",
			"top-1/2 -translate-y-1/2": position === "center",
		}
	)
 
	return (
		    <div 
			className={classes}>
				{children}
			</div>
	)
}



