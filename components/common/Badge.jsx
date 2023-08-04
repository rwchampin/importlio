import cn from "classnames";
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
    const color = `indigo`
    const style = `bg-${color}-dark-a-3 hover:bg-${color}-dark-4 active:bg-${color}-dark-5 inline-flex items-center rounded-xl whitespace-nowrap  px-2 py-0.5 text-[10px] hyphens  text-${color}-11 ring-1 ring-inset ring-${color}-7 hover:ring-${color}-8 ${className}`
        return (

            <div className={style}>
                {children}
            </div>
             
        )

}