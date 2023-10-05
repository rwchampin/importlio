"use client";
import { AiOutlineCheckCircle } from 'react-icons/ai'
 
export default function Ul({
     title, 
     titleStyles="text-[1.25rem] font-bold pb-2",
     listItems 
    }: any) {

    return (
        <div 
            className="flex flex-col text-left"
        >
        <h5 className={titleStyles}>{title}</h5>
        <ul className="list-disc list-inside" role='list'>
            {listItems.map((item:any, index:number) => (
                <li
                    role='listitem'
                    className="flex items-center gap-2 text-sm"
                 key={index}
                 >
                    <AiOutlineCheckCircle className="text-green-500" />
                    {item}
                    </li>
            ))}
        </ul>
        </div>
    )
}