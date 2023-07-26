export default function Section({ children, className="" }) {

	return (
		<section
			className={`prose-2xl ${className}`}>
			{children}
		</section>
	)
}