interface TitleProps {
    children: React.ReactNode;
    className?: string;
}
export default function Title({ children, className }: TitleProps) {

    return (
        <h1 className={`text-heading-1 font-black font-montserrat text-button mb-10 ${className}`}>
            {children}
        </h1>
    );
};


