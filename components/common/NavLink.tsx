import Link from 'next/link';
import cn from 'classnames';

interface Props {
	isSelected?: boolean; // used to determine if the link is selected
	isMobile?: boolean; // used to determine if the link is mobile
	isBanner?: boolean; // used to determine if the link is a banner which is used in the footer
	href?: string;
	children: React.ReactNode;
	onClick?: () => void;
	[rest: string]: any;
}


export default function NavLink({
	isSelected,
	isMobile,
	isBanner,
	href,
	children,
	onClick,

	...rest
}: Props) {
	const className = cn(
		rest.className,
		'text-black px-3 py-2 font-medium rounded-md',
		{
			'underline': isSelected,
			'text-black font-apercu-bold text-black':
				!isSelected && !isBanner,
			'block text-base': isMobile,
			'text-sm': !isMobile,
			'text-gray-300': isBanner,
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
