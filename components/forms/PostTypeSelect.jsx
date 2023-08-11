"use client";

import React, { useEffect, useState } from "react";

export default function PostTypeSelect({ data, onChange, value, required, placeholder, label, labelId, type, name }) {
    const [options, setOptions] = useState([
        {
            id: -1,
            name: '-----------------'
        }
    ]);

    useEffect(() => {
        if (data) {
            setOptions((prev) => [...prev, ...data]);
        }
    }, [data, options]);

 

    return (
        <select
            id={labelId}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            type={type}
            aria-labelledby={labelId}
            aria-required={required}
            name={name}
            label={label}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
            {options.map((option, idx) => (
                <option
                    key={idx}
                    value={option.id}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
}
