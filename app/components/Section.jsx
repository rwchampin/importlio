import cn from "classnames";

export default function Section({ children, full=false, className="" }) {

	const classes = cn(
		"",
		{
			"w-full max-w-[90vw]  mx-auto": !full,
			"w-full max-w-full": full,
		},
		className
	);
	return (
		<section
			className={classes}>
			{children}
		</section>
	)
}