
interface HeadlineProps {
    children: React.ReactNode;
    className?: string;
}
export default function Headline({ children, className }: HeadlineProps) {

    return (
        <h4  className={`uppercase font-montserrat font-bold text-gray-400  text-sm  m-0 ${className}`}>
            {children}
        </h4>
    );
};