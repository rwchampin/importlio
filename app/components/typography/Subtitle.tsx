
interface SubtitleProps {
    children: React.ReactNode;
    className?: string;
}
export default function Subtitle({ children, className }: SubtitleProps) {

    return (
        <h2  className={`font-apercu font-bold text-gray-11  not-prose text-subtitle-1 line-tight m-0 ${className}`}>
            {children}
        </h2>
    );
};




