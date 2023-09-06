"use client";
import { useEffect, useState } from "react";
import { Select as SS, SelectItem } from "@nextui-org/react";
import {
  getPostTypes,
  getTags,
  getCategories,
  getPostStatuses,
} from "@/lib/api";

export default function Select({
  label,
  type,
  placeholder,
  required,
  name,
  value,
  onChange,
  selectionMode = "single",
}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data;
      switch (name) {
        case "post_type":
          data = await getPostTypes();
          break;
        case "tag":
          data = await getTags();
          break;
        case "category":
          data = await getCategories();
          break;
        case "post_status":
          data = await getPostStatuses();
          break;
        default:
          break;
      }

      const formattedOptions = data.map((obj) => ({
        label: obj.name,
        value: obj.id,
      }));
      debugger
      setOptions(formattedOptions);
    }

    fetchData();
  }, [type]);

  return (
    <SS
      label={label}
      placeholder={placeholder}
      className="max-w-xs"
      required={required}
      name={name}
      value={value}
      onChange={onChange}
      defaultSelectedKeys={[value]}
      selectionMode={selectionMode}
      items={options}
    >
        {(option) => <SelectItem key={option.value}>{option.label}</SelectItem>}
    </SS>
  );
}
