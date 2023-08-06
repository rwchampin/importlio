import cn from "classnames";
import Link from "next/link";
import slugify from "slugify";
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function Badge({ type,showClose, children, className, ...props }) {
    const getRandomColor = () => {
        const colors = [
            "red",
            "yellow",
            "green",
            "blue",
            "indigo",
            "purple",
            "pink",
        ];
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];
    };
    const getColor = (type) => {
        switch (type) {
            case "primary":
                return "primary";
            case "success":
                return "green";
            case "danger":
                return "red";
            case "warning":
                return "yellow";
            case "info":
                return "blue";
            default:
                return "gray";
        }
    };
    const color = "green"
    const style = `bg-indigo-5 hover:bg-indigo-dark-4 active:bg-indigo-dark-5 inline-flex items-center rounded-xl whitespace-nowrap  px-2 py-0.5 text-[10px] hyphens  text-indigo-11 ring-1 ring-inset ring-indigo-7 hover:ring-indigo-8 ${className}`
        return (

            <Link
                href={`/ecommerce-tutorials/${type}/${slugify(children.toLowerCase())}`}
             className={style}
             >
                {children}
            </Link>
             
        )

}