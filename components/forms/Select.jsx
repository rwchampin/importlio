import React from "react";
import {Select as SS, SelectItem} from "@nextui-org/react";


export default function Select({ label, labelId, placeholder, options, required, name, value, onChange }) {
  return (

   
      <SS
        label={label}
        placeholder={placeholder}
        className="max-w-xs"
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        defaultSelectedKeys={[labelId]}
      >
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SS>

  );
}
