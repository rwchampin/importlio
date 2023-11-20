import Link from "next/link";
import cn from 'classnames';

export default function CustomLink({
    href,
    children,
    variant,
    size,
    classNames,
    startContent,
    endContent,
    ...props
    }: {
    href: string;
    children: any;
    variant?: string;
    size?: string;
    classNames?: string;
    startContent?: any;
    endContent?: any;
    [rest: string]: any;
}) {

    const cs = cn(
        `hover:cursor-pointer w-full px-3 ${classNames}`,
        {
            'bg-button h-input text-offwhite rounded-md flex items-center justify-center shadow-md hover:shadow-xl': variant === 'solid',
            'border-2 border-button rounded-md h-input flex items-center justify-center shadow-md hover:shadow-xl': variant === 'outline',
            'text-gray-400 hover:text-black': variant === 'text',
            'text-sm max-w-[150px]': size === 'sm',
            'text-md': size === 'md',
            'text-lg': size === 'lg',
            'text-xl': size === 'xl',
            'justify-between': endContent || startContent,
        });

  return (
    <Link
        href={href}
        className={cs}
        {...props}
    >
        {children}
    </Link>
  )
}
