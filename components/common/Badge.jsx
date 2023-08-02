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
    const color = getRandomColor();
    const style = `bg-${color}-50 inline-flex items-center rounded-xl white-space-nowrap  px-2 text-[10px] hyphens  text-${color}-600 ring-1 ring-inset ring-${color}-500/10`

        return (
          <>
            <span className={style}>
                {children}
            </span>
             
          </>
        )

}