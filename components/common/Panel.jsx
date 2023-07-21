export default function Panel({ children,bg, className }) {
	return (
		<div className={`${className} p-5 rounded-lg ${bg === 'dark' ? 'text-offwhite bg-offgray' : 'text-black bg-offwhite'}`}>
			{children}
		</div>
	)
}