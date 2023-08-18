"use client";

import Link from 'next/link';
import cn from 'classnames';
import Dropdown from '../Dropdown';
import { usePathname } from 'next/navigation';
interface Props {
	isSelected?: boolean; // used to determine if the link is selected
	href?: string;
	dropdownData?: any;
	children: React.ReactNode;
	[rest: string]: any;
	solid?: boolean;
	type?: string | boolean;
	border?: boolean;
}




export default function NavLink({
	link,
	...rest
}: Props) {
	const {pathname}:any = usePathname();
	
	const isSelected = (path: string | undefined) =>
    pathname === path ? true : false;

	const className = cn(
		rest.className,
		'font-apercu font-bold text-lg hover:pointer-cursor ',
		{
			'text-sm': !isSelected,
			'active-nav text-black font-apercu font-bold text-xs': isSelected,
			// 'bg-black text-white text-xs rounded-md px-4 py-2 outline-2 outline-black no-underline focus:text-white focus:bg-black active:bg-black active:text-white active:no-underline': solid,
			// 'bg-transparent text-black text-xs outline-2 outline-black rounded-md  px-4 py-2 no-underline': border,
		}
	);

	if(link.dropdownData && link.dropdownData.length > 0) {
		return (
			<Dropdown
				className={className}
				href={link.href}
				link={link}
				label={link.label}
				onChange={link.onChange}
				value={link.value}

				required={link.required}
				placeholder={link.placeholder}
				dropdownData={link.dropdownData}
				labelId={link.labelId}
				{...rest}
				solid={link.solid}
				type={link.type}
				border={link.border}
				isSelected={isSelected}
				name={link.name}

			>
				{link.pretty}
			</Dropdown>
		);
	}

	if (!link.href) {
		return (
			<span className={link.className} role='button'>
				{link.pretty}
			</span>
		);
	}

	

	return (
		<Link data-enter  className={link.className} href={link.href}>
			{link.pretty}
		</Link>
	);
}
