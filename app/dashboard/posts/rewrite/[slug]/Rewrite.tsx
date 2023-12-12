"use client";
import React from 'react'

export default function Rewrite() {
    const [url, setUrl] = React.useState("");
  const onSubmit = async (e: any) => {
    e.preventDefault();


    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/posts/rewrite/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      }
    );

    const data = await res.json();
      debugger
    console.log(data);
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
    <input
      name="url"
      id="url"
      value={url}
        onChange={(e) => setUrl(e.target.value)}
      className="w-full p-5 bg-gray-100 rounded-md"
      placeholder="Content"
    />
    <button
      type="submit"
      className="bg-button text-white h-input w-full rounded-lg flex items-center justify-center"
    >
      Submit
    </button>
  </form>
  )
}
