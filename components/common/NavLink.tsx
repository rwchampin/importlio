"use client";
import { use, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import gsap from 'gsap';
interface Props {
	isSelected?: boolean; // used to determine if the link is selected
	isMobile?: boolean; // used to determine if the link is mobile
	isBanner?: boolean; // used to determine if the link is a banner which is used in the footer
	href?: string;
	children: React.ReactNode;
	onClick?: () => void;
	[rest: string]: any;
	solid?: boolean;
	border?: boolean;
}


export default function NavLink({
	isSelected,
	isMobile,
	isBanner,
	href,
	children,
	onClick,
	solid,
	border,
	...rest
}: Props) {
	useEffect(() => {
		gsap.fromTo(
			'nav a',
			{
				opacity: 0,
				y: -20,
				scale:.5,
			},	
			{
				opacity: 1,
				y: 0,
				scale:1,
				stagger: 0.1,
				duration: 0.3,
				ease: 'power3.inOut',

			}
		);
	}, []);
	
	const className = cn(
		rest.className,
		'text-black px-3 py-2 font-medium rounded-md',
		{
			'underline font-apercu-bold text-black': isSelected,
			'text-black font-apercu-bold text-black':
				!isSelected && !isBanner,
			'block text-base': isMobile,
			'text-sm': !isMobile,
			'text-gray-300': isBanner,
			'bg-black text-white rounded-lg px-4 py-2 outline-2 outline-black no-underline focus:text-white focus:bg-black active:bg-black active:text-white active:no-underline': solid,
			'bg-white text-black outline-2 outline-black rounded-lg  px-4 py-2 no-underline': border,
		}
	);

	if (!href) {
		return (
			<span className={className} role='button' onClick={onClick}>
				{children}
			</span>
		);
	}

	

	return (
		<Link className={className} href={href} onClick={onClick}>
			{children}
		</Link>
	);
}
