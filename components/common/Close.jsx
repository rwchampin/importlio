import { IoMdClose } from "react-icons/io";

export default function Close({ closeFN }) {
    return (
        <span className="absolute top-0 right-0 p-2 hover:cursor-pointer font-bold text-xs">
            <IoMdClose onClick={closeFN} className="inline-block text-2xl font-black" />
        </span>
    )
}   