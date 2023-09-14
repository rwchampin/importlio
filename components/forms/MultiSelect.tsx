"use client"
import { useState } from "react";
import {Select, SelectItem, Selection} from "@nextui-org/react";


export default function MultiSelect({
    label,
    type,
    placeholder,
    required,
    name,
    options,
    value,
    onChange,
}:any) {
  const [values, setValues] = useState<Selection>(new Set([]));

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const splitVals = new Set(e.target.value.split(","));
    // const selectedItems = Array.from(splitVals).map((item:any) => {
    //     const id = parseInt(item)
    //     return {
    //         id,
    //         // name: options.find((option:any) => option.value === id)?.label
    //     }
    // })
    // debugger
    onChange({target: {name, value: [{
        id: 12,
        "name": "Product Sourcing Techniques"
    }] }})
    setValues(splitVals)
  };

//   const splitVals = [ ...value.map((item:any) => item.id.toString())]
//   debugger
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label={label}
        selectionMode="multiple"
        placeholder={`Select an ${name}`}
        selectedKeys={values}
        className="max-w-xs"
        onChange={handleSelectionChange}
      >
        {options.map((option:any) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <p className="text-small text-default-500">Selected: {Array.from(values).join(", ")}</p>
    </div>      
  );
}
