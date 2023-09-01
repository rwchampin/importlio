import React from "react";
import { TableRow, TableCell, Chip, Tooltip } from "@nextui-org/react";
export default function PostRow({ post, columns }) {
    const renderCell = (post, columns) => {
        const cellValue = post[columnKey];
    
        switch (columnKey) {
          case "name":
            return (
              <User
                avatarProps={{radius: "lg", src: user.avatar}}
                description={user.email}
                name={cellValue}
              >
                {user.email}
              </User>
            );
          case "role":
            return (
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">{cellValue}</p>
                <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
              </div>
            );
          case "status":
            return (
              <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                {cellValue}
              </Chip>
            );
          case "actions":
            return (
              <div className="relative flex items-center gap-2">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">

                  </span>
                </Tooltip>
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">

                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">

                  </span>
                </Tooltip>
              </div>
            );
          default:
            return cellValue;
        }
      };
    return (
        <TableRow key={post.id}>
        {/* {(columnKey) => <TableCell>{renderCell(post, columnKey)}</TableCell>} */}
      </TableRow>
    )

}