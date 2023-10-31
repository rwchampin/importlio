import { useState, forwardRef } from "react";
import { useDropzone } from "react-dropzone";

import Papa from "papaparse";

const DropWrapper = forwardRef(({ ref, props }:any) => {
  const [urls, setUrls] = useState([]);

  const handleFileDrop = (acceptedFiles: any) => {
    const file = acceptedFiles[0];
    Papa.parse(file, {
      complete: (results: any) => {
        const parsedUrls = results.data
          .flat()
          .filter(Boolean)
          .map((url) => ({ url }));
        setUrls(parsedUrls);
      },
      header: false,
    });
  };

  const { getRootProps, getInputProps, isDragActive }: any = useDropzone<any>({
    accept: ".csv",
    onDrop: handleFileDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      {children}
      {urls.map((url: any) => {
        return (
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {url.url}
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
});


export default DropWrapper;