
import Link from "next/link";
import slugify from "slugify";
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function Badge({ type,showClose,size, children, className, ...props }) {
     

        return (
             <Link 
                href={`/${type}/${slugify(children)}`}
             className={`self-start shadow-xl px-3 py-1 text-${size} text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60`}
             >{children}</Link>

        )

}