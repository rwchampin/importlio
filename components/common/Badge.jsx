

export default function Badge({ type, showClose, size=1, children, className, ...props }) {
        
        return (
                <span

                        className={`self-start shadow-xl px-3 py-1 text-${size} text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60`}
                >{children}</span>

        )

}