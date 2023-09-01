"use client";
import React from "react";
// import {Table, TableHeader as TH, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, getKeyValue} from "@nextui-org/react";

// import PostRow from "./PostRow";

//  const TableHeader = ({ columns }) => {

//     return (
//         <TH columns={columns}>
//         {(column) => (
//           <TableColumn key={column.id}>
//             {column.name}
//           </TableColumn>
//         )}
//       </TH>
//     )
// }
export default function PostTable({
    columns,
    data
}) {


  return (
  <div>
    {data.map((item:any) => (
        <div key={item.id}>
            <span>
                {item.name}
            </span>
            <span>
                {item.title}
            </span>
        </div>
        ))}
  </div>
       
  );
}
