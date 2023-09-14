"use client";
import { Select as SS, SelectItem } from "@nextui-org/react";

export default function Select({
  label,
  type,
  placeholder,
  required,
  name,
  options,
  value,
  onChange,
}) {

  const optionsWithashedValue = [{value: -1, label: '-----------'}, ...options]


  return (
    <SS
      label={label}
      placeholder={placeholder}
      className="max-w-xs"
      isRequired={required}
      name={name}
      value={value}
      onChange={(e) => onChange({ 
        target: {
          value: e.target.value,
          name  
        }
       })}
      defaultSelectedKeys={[`${value.id}`]}
      selectionMode="single"
    >
        {optionsWithashedValue.map((option) => <SelectItem key={option.value} value={value}>{option.label}</SelectItem>)}
    </SS>
  );
}
