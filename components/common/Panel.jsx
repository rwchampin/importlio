export default function Panel({ children,className, round }) {
	return (
		<section className={`${round? 'rounded-lg':''} bg-offwhite shadow-xl hover:shadow-2xl ${className}`}>
			{children}
		</section>
	)
}