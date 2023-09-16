
interface HeadlineProps {
    children: React.ReactNode;
    className?: string;
}
export default function Headline({ children, className }: HeadlineProps) {

    return (
        <span  className={`uppercase font-montserrat font-bold text-gray-400  text-headline  m-0 ${className}`}>
            {children}
        </span>
    );
};