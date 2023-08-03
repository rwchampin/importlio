import cn from 'classnames';
import { CgSpinner } from "react-icons/cg";

interface Props {
	sm?: boolean;
	md?: boolean;
	lg?: boolean;
	showText?: boolean;
}

export default function Spinner({ sm, md, lg, showText }: Props) {
  const className = cn("animate-spin text-white-300 fill-white-300 mr-2", {
    "w-4 h-4": sm,
    "w-6 h-6": md,
    "w-8 h-8": lg,
  });

  return (
    <span role="status">
      <CgSpinner className={className} />
		  {showText===true&&<span className="sr-only">Loading...</span>}
    </span>
  );
}
