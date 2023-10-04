// Define a Row component
import { TableCell, TableRow } from "@nextui-org/react";
const Row = ({
    item,
    columns,
    getKeyValue,
}:any) => {
    return (
      <TableRow key={item.key} className="even:bg-gray-200 flex rounded-md">
            {(columnKey) => <TableCell className="flex-1">{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
    );
  };


  export default Row;