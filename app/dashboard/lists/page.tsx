"use client";
import { Input, Textarea, Select,SelectItem } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { useEffect, useState } from "react";

// import { scrapeGoogleSearch } from "@/lib/functions";
export default async function Page() {
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto('https://developer.chrome.com/');
    // const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    // console.log(data);

    // await browser.close();
  const [value, setValue] = useState<any>("");
  const [chips, setChips] = useState<any>([]);
    
  const onEnter = () => {
    // Perform the fetch call here with 'chips' array
    const res = fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/marketing/get-data/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chips }),
      }
    )
      .then((res:any) => res.json())
      .then((data:any) => {
        debugger;
      });
  };

  const onComma = () => {
    if (value.trim() !== "") {
      setChips([...chips, value.replace(",", "")]);
      setValue("");
    }
  };

  const handleChange = (e:any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      onEnter();
    }

    if (e.key === "," || e.keyCode === 188) {
      onComma();
    }
  };

  // Call the function to scrape the Google search page
 
  
  const niches:any = []
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-center bg-red-500">
        <Input
          onKeyDown={handleChange}
          label="Name"
          placeholder="Enter keywords to generate your list"
          value={value}
          size="lg"
          type="text"
          variant="bordered"
          isClearable={true}
          onValueChange={(newValue) => setValue(newValue)}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-button text-offwhite",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "!cursor-text",
            ],
          }}
        />
        <div className="flex flex-wrap mt-4">
          {chips.map((chip:any, index:any) => (
            <Chip key={index}>{chip}</Chip>
          ))}
        </div>
      </div>

      <form>
        <Select name="niche">
          {niches.map((animal:any) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Textarea
          size="lg"
          placeholder="Enter your message here"
          label="Message"
          className="w-full"
          rows={5}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "!cursor-text",
            ],
          }}
        />
      </form>
    </>
  );
}
