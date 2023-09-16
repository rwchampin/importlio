import cn from 'classnames';
import { CgSpinner } from "react-icons/cg";

interface Props {
  children?: React.ReactNode;
	sm?: boolean;
	md?: boolean;
	lg?: boolean;
	showText?: boolean;
}

export default function Spinner({ children, sm, md, lg, showText }: Props) {
  const className = cn("animate-spin text-white-300 fill-white-300 mr-2", {
    "w-4 h-4": sm,
    "w-6 h-6": md,
    "w-8 h-8": lg,
  });

  const getContent = () => {
    if(children) {
      return children;
    }
    return <span className="text-white-300">Loading...</span>
  }
  return (
    <span role="status" className={` ${showText && 'flex-col gap-2 rounded-xl p-2 shadow-xl '} flex-auto flex  items-center justify-center drop-shadow-xl`}>
      <CgSpinner className={className} />
		  {showText===true&& getContent()}
    </span>
  );
}
