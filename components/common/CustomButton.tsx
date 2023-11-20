import cn from 'classnames';

export default function CustomButton({
    children,
    onClick,
    variant='solid',
    size,
    classNames,
    endContent,
    startContent
}:any) {

    const cs = cn(
        `hover:cursor-pointer flex-initial w-full  ${classNames}`,
    {
        'bg-button h-input text-offwhite rounded-lg flex items-center justify-center shadow-md hover:shadow-xl': variant === 'solid',
        'border-2 border-button rounded-lg h-input flex items-center justify-center shadow-md hover:shadow-xl': variant === 'outline',
        'text-gray-400 hover:text-black': variant === 'text',
        'text-sm max-w-md': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'text-xl': size === 'xl',
        'justify-between px-3': endContent || startContent,
    });
    
  return (
    <button
        className={cs}
        onClick={onClick}
    >
        {children}
    </button>
  )
}
