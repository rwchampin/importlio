import cn from "classnames";

export default function Section({ children, full=false, className="" }) {

	
	return (
		<section
			className="w-full max-w-[90vw]  mx-auto">
			{children}
		</section>
	)
}