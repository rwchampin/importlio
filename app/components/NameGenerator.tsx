"use client";

import useAuth from "@/hooks/use-auth";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import Spinner from "@/app/components/Spinner";
// import { Checkbox } from "@nextui-org/react";
import toast from "react-hot-toast";

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

  const generateBusinessName = async (keyword: string) => {
    if (!keyword) return;
    setLoading(true);

    const message = {
      role: "user",
      content: `make me a list of 10 business names and catchy description or tagline for the new name based on the following topics, keywords or phrases: ${keyword} You will then return to me a json object containing a list of the 10 names & respective tagline or description you create.  The object should look like this: { "list": [ { "name": "name1", "description": "description1" }, { "name": "name2", "description": "description2" }, { "name": "name3", "description": "description3" }, { "name": "name4", "description": "description4" }, { "name": "name5", "description": "description5" }, { "name": "name6", "description": "description6" }, { "name": "name7", "description": "description7" }, { "name": "name8", "description": "description8" }, { "name": "name9", "description": "description9" }, { "name": "name10", "description": "description10" } ] }`,
    };
    const response = await openai.current.createChatCompletion({
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      messages: [message],
      temperature: 0,
      max_tokens: 364,
    });
    const gptResponse = response.data.choices[0].message.content;
    const res = JSON.parse(gptResponse);
    setIdeas(res.list);
    setLoading(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    debugger;
    generateBusinessName(keyword);
  };

  const handleChange = (e: any) => {
    setKeyword(e.target.value);
    debugger;
  };

  useEffect(() => {
    generateBusinessName(keyword);
  }, []);

  const handleFocus = (e: any) => {
    console.log(auth);
    if (auth.isAuthenticated === false) {
      toast.error(
        "You must be logged in to use this tool\n\nPlease login or register for a free account"
      );
    }
  };
  return (
    <div className="w-full max-w-[90vw] mx-auto flex flex-col justify-center items-center gap-5 py-10 px-5">
      {/* form for keyword ideas */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-2 mx-auto"
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

      <div className=" w-full flex flex-col gap-3">
        {ideas.length > 0 &&
          ideas.map((idea: any, i: any) => {
            return (
              <div className="p-2 rounded-lg shadow-md bg-gray-300 my-2 text-black border-4 border-button flex gap-2 items-center">
                {/* <Checkbox
                  key={i}
                  value={i}
                  onChange={() => {}}
                  checked={false}
                  disabled={true}
                /> */}
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">{idea.name}</div>
                  <p className="text-sm text-gray-600 m-0">{idea.description}</p>
                </div>
              </div>
            );
          })}
      </div>
      {/* list of keyword ideas */}
    </div>
  );
}
