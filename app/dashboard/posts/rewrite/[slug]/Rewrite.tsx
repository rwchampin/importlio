"use client";
import React from 'react'
import { Configuration, OpenAIApi } from 'openai';


export default function Rewrite({
  batchSubmit,
}: any) {
    const [url, setUrl] = React.useState("");

    const client = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });
 


  return (
     <>
  
  <form onSubmit={batchSubmit} className="flex flex-col gap-3">
    <input
      name="batch-url"
      id="batch-url"
      className="w-full p-5 bg-gray-100 rounded-md"
      placeholder="Content"
    />
    <button
      type="submit"
      className="bg-button text-white h-input w-full rounded-lg flex items-center justify-center"
    >
      FUCK
    </button>
  </form>
  </>
  
  )
}
