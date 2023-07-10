import Link from 'next/link';
import cn from 'classnames';

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
	const className = cn(
		rest.className,
		'text-white rounded-md px-3 py-2 font-medium',
		{
			'bg-gray-900': isSelected,
			'text-gray-300 hover:bg-gray-700 hover:text-white':
				!isSelected && !isBanner,
			'block text-base': isMobile,
			'text-sm': !isMobile,
			'text-gray-300': isBanner,
		}
	);

	if (!href) {
		return (
			<span className={className} role='button' onClick={rest.onClick}>
				{children}
			</span>
		);
	}

	return (
		<Link className={className} href={href}>
			{children}
		</Link>
	);
}