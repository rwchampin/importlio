export default function ScrollGradient({ children, className}:any) {

    return (
        <div className={`fade ${className}`}>
            {children}
        </div>
    )
}