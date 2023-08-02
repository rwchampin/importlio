import cn from 'classnames';
import { Primary } from '@/components/common/buttons';
interface Props {
	provider: 'google' | 'facebook';
	children: React.ReactNode;
	[rest: string]: any;
}

export default function SocialButton({ provider, children, ...rest }: Props) {
	const className = cn(
    "flex-1 text-white rounded-lg px-3 mt-3 py-2 font-medium",
    {
      "bg-button text-offwhite": provider === "google",
      "bg-button text-offwhite hover:bg-blue-400": provider === "facebook",
    }
  );

	return (
		<Primary className={className} {...rest}>
			<span className='flex justify-start items-center'>{children}</span>
		</Primary>
	);
}
