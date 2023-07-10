import Link from 'next/link';
import cn from 'classnames';
import { Dropdown } from '@/components/common';

interface Props {
	isSelected?: boolean; // used to determine if the link is selected
	isMobile?: boolean; // used to determine if the link is mobile
	isBanner?: boolean; // used to determine if the link is a banner which is used in the footer
	href?: string;
	children: React.ReactNode;
	[rest: string]: any;
}

export default function NavLink({
	isSelected,
	isMobile,
	isBanner,
	href,
	children,
	...rest
}: Props) {
	 
	if(isDropdown) {
		return (
			<Dropdown>
				{children}
			</Dropdown>
		);
	}
	if (!href) {
		return (
			<span className="header-main font-apercu-bold font-bold" role='button' onClick={rest.onClick}>
				{children}
			</span>
		);
	}

	return (
		<Link className="header-main font-apercu-bold font-bold cursor-pointer" href={href}>
			{children}
		</Link>
	);
}
