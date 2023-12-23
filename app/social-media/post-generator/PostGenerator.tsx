"use client";

import useAuth from "@/hooks/use-auth";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import Spinner from "@/app/components/Spinner";
// import { Checkbox } from "@nextui-org/react";
import toast from "react-hot-toast";

export default function PostGenerator() {
  const auth = useAuth();
  const openai = useRef<any>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [accountType, setAccountType] = useState<string>("");
  const [post, setPost] = useState<any>([]);
  const [image, setImage] = useState<any>('');
  const [imageDescription, setImageDescription] = useState<any>([]);
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

  const generateBusinessName = async () => {
    if (!accountType || !topic) return;
    setLoading(true);

    const message = {
      role: "user",
      content: `make me a ${platform} post caption for a user who is a ${accountType} and wants to make a post about ${topic} The post should be 2-3 sentences long.  You will then return to me a json object containing the post & 10 relevant hashtags you create.  The object should look like this: { "post": "post text here", "hashtags": [ "hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5", "hashtag6", "hashtag7", "hashtag8", "hashtag9", "hashtag10" ] }`,
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
    setPost(res.post);

    const imgres = await openai.current.createImage({
      model: "dall-e-3",
      prompt: `This is a photo of a ${topic} for a ${accountType} account. Use the following words or phrases to create the image: ${imageDescription}`,
      size: "1024x1024",
      n: 1,
    });

    const img_url = imgres.data.data[0]["url"]
    setImage(img_url);


    setLoading(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    generateBusinessName();
  };

 

//   useEffect(() => {
//     generateBusinessName(keyword);
//   }, []);

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
        {image !== '' && (<img src={image} className="w-full max-w-2xl rounded-md mx-auto h-full object-cover" />)}
        {post && (<div className="w-full max-w-2xl flex flex-col gap-2 mx-auto">{post}</div>)}
      {/* form for keyword ideas */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-2 mx-auto"
      >
        <label htmlFor="platform" className="text-2xl">
            Platform (Instagram, Twitter, etc)
        </label>
        <select
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="platform"
            value={platform}
            onFocus={handleFocus}
            onChange={(e) => setPlatform(e.target.value)}
            >
            <option value="-1">Select a Platform</option>
            <option disabled value="instagram">
                Instagram
            </option>
            <option value="threads">Threads</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">Linkedin</option>
            <option value="tiktok">Tiktok</option>
            </select>
        <label htmlFor="accountType" className="text-2xl">
          What account type are you? (blogger, personal, business, etc)
        </label>
        <input
          type="text"
          id="accountType"
          name="accountType"
          // onBlur={handleFocus}
          onFocus={handleFocus}
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="bg-gray-300 p-2 rounded-md w-full h-input"
        />
        <label htmlFor="keyword" className="text-2xl">
          Enter a basic keyword or idea for the post
        </label>
        <textarea
          id="topic"
          name="topic"
          rows={5}
          // onBlur={handleFocus}
          onFocus={handleFocus}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="bg-gray-300 p-2 rounded-md w-full h-input"
        />

        <label htmlFor="imageDescription" className="text-2xl">
            Enter keywords to style the image (realistic, cartoon, etc)
        </label>
        <textarea
            id="imageDescription"
            name="imageDescription"
          rows={5}
          // onBlur={handleFocus}
          onFocus={handleFocus}
          value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
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
        {loading && <Spinner lg />}

        
      {/* list of keyword ideas */}

      {/* list of keyword ideas */}
    </div>
  );
}
