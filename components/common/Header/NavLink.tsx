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

	
	const className = cn(
		rest.className,
		'font-medium hover:pointer-cursor ',
		{
			'border-3 border-black rounded-full': isBanner,
			'text-xs': !isSelected,
			'active-nav text-black font-apercu font-bold text-xs': isSelected,
			'text-lg': isMobile,
			'bg-black text-white text-xs rounded-md px-4 py-2 outline-2 outline-black no-underline focus:text-white focus:bg-black active:bg-black active:text-white active:no-underline': solid,
			'bg-transparent text-black text-xs outline-2 outline-black rounded-md  px-4 py-2 no-underline': border,
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
		<Link data-attr="cursor" className={className} href={href} onClick={onClick}>
			{children}
		</Link>
	);
}
