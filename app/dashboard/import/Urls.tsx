"use client";
import { Checkbox, Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

export default function Urls({ urls }: any) {
    debugger
  const [urlList, setUrls] = useState<any>(urls);
  const [checked, setChecked] = useState<any>([]);

  useEffect(() => {
    setUrls(urls);
  }, []);

  const handleCheckboxChange = (urlId: any) => {
    if (checked.includes(urlId)) {
      setChecked(checked.filter((id: any) => id !== urlId));
    } else {
      setChecked([...checked, urlId]);
    }
  };

  const removeUrls = () => {
    const updatedUrls = urlList.filter((url: any) => !checked.includes(url.id));
    setChecked([]);
    setUrls(updatedUrls);
  };

//   if (urlList.length === 0) {
//     return null;
//   }

  return (
    <div className="bg-gray-300 rounded-xl p-5">
      {checked.length > 0 && <Button onClick={removeUrls}>Delete</Button>}
      {urlList.length && urlList.map((url: any, i: any) => (
        <div
          key={i}
          className="p-5 mb-1 w-full bg-gray-400 shadow-xl rounded-xl flex items-center justify-start gap-5"
        >
          <Checkbox
            checked={checked.includes(url.id)}
            onChange={() => handleCheckboxChange(url.id)}
          />
          {url.url}
        </div>
        ))}
      {urlList.length > 0 && <Button>Get Product Data</Button>}
    </div>
  );
}

