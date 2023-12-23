"use client";

import  useAuth  from "@/hooks/use-auth";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import Spinner from "@/app/components/Spinner";

import  toast  from "react-hot-toast";

export default function NameGenerator() {
  const auth = useAuth();
  const openai = useRef<any>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [ideas, setIdeas] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    const createConnection: any = async () => {
      const configuration: any = new Configuration({
        apiKey: "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",
      });
      openai.current = new OpenAIApi(configuration);
    };

    createConnection();
  }, []);

  // fn to parse an orderd list from gpt3
  const parseList = (list: string) => {
    const listItems = list.split("\n");
    const htmlList = listItems.map((item: string) => {
      return `<li>${item}</li>`;
    });

    return `<ul>${htmlList.join("")}</ul>`;
  };
  const generateBusinessName = async (keyword: string) => {
    if (!keyword) return;
    setLoading(true);

    const message = {
      role: "user",
      content: `make me a list seperated by a '/n' of 10 business names for ${keyword}`,
    };
    const response = await openai.current.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [message],
      temperature: 0,
      max_tokens: 64,
    });
    const gptResponse = response.data.choices[0].message.content;
    const parsedList = parseList(gptResponse);
    setIdeas(parsedList);
    setLoading(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    debugger
    generateBusinessName(keyword);
  };

  const handleChange = (e: any) => {
    setKeyword(e.target.value);
    debugger
  };

  useEffect(() => {
    generateBusinessName(keyword);
  }, []);

  const handleFocus = (e: any) => {
    console.log(auth);
    if(auth.isAuthenticated === false) {
      toast.error("You must be logged in to use this tool\n\nPlease login or register for a free account");
    }
  };
  return (
    <div className="w-full max-w-[90vw] mx-auto flex flex-col justify-center items-center gap-5 py-10 px-5">
      {/* form for keyword ideas */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-2 mx-auto"
      >
        <label htmlFor="keyword" className="text-2xl">
          Enter your ideas/keywords for your business!
        </label>
        <input
          type="text"
          id="keyword"
          name="keyword"
          // onBlur={handleFocus}
          onFocus={handleFocus}
          value={keyword}
          onChange={handleChange}
          className="bg-gray-300 p-2 rounded-md w-full h-input"
        />
        <input
          type="submit"
          value="Generate"
          onFocus={handleFocus}
          className="bg-button text-white  h-input w-full rounded-md"
        />
      </form>
      {/* form for keyword ideas */}

      {/* list of keyword ideas */}
      {loading && <Spinner lg />}
      
      <div className="rounded-lg shadow-lg p-5 bg-gray-200 w-full">
        <div dangerouslySetInnerHTML={{ __html: ideas }}></div>
      </div>
      {/* list of keyword ideas */}
    </div>
  );
}
