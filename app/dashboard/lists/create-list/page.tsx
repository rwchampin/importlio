"use client";
import { Input, Textarea, Select,SelectItem } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { useEffect, useState } from "react";

// import { scrapeGoogleSearch } from "@/lib/functions";
export default function Page() {
    const [listName, setListName] = useState<any>("Untitled List");
    const [listDescription, setListDescription] = useState<any>("A blank list description.");

    const [listSize, setListSize] = useState<any>(500);
    const [listKeywords, setListKeywords] = useState<any>("");
  const listSizes:any = [
    100,
    250,
    500,
    1000,
    2500,
    5000,
    10000,
  ]

  const emailTargets:any = [
    "@gmail.com",
    "@yahoo.com",
    "@hotmail.com",
    "@aol.com",
    "@icloud.com",
    "@outlook.com",
    "@msn.com",
    "@live.com",
    "@yandex.com",
    "@mail.com",
    "@zoho.com",
  ]

  const contactInformationTypes = [
    "Email",
    "Phone Number",
    "Address",
    "Social Media",
    "Website",
    "Name",
  ]

    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto('https://developer.chrome.com/');
    // const data = await page.evaluate(() => document.querySelector('*').outerHTML);

    // console.log(data);

    // await browser.close();
//   const listSizes = [
//     100,
//     250,
//     500,
//     1000,
//     2500,
//     5000,
//     10000,
//   ]

//   const emailTargets = [
//     "@gmail.com",
//     "@yahoo.com",
//     "@hotmail.com",
//     "@aol.com",
//     "@icloud.com",
//     "@outlook.com",
//     "@msn.com",
//     "@live.com",
//     "@yandex.com",
//     "@mail.com",
//     "@zoho.com",
//   ]

//   const contactInformationTypes = [
//     "Email",
//     "Phone Number",
//     "Address",
//     "Social Media",
//     "Website",
//     "Name",
//   ]
//   const [value, setValue] = useState<any>("");
//   const [chips, setChips] = useState<any>([]);
  
  const getData = () => {
    // Perform the fetch call here with 'chips' array
    const res = fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/marketing/get-data/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listSize, listKeywords }),
      }
    )
      .then((res:any) => res.json())
      .then((data:any) => {
        debugger;
      });
  };
  
  const handleSubmit = () => {

  }
 
  // Call the function to scrape the Google search page
 
  
  const niches:any = []
  return (
    <>
      <form onSubmit={handleSubmit} className="h-full w-full flex flex-col md:flex-row items-start justify-center gap-3">
        <div className="bg-gray-200 flex-1 shadow-sm rounded-lg p-5 border-2 border-black/10 gap-2 flex flex-col">
        <Input
          label="Name"
          placeholder="Name of List"
          value={listName}
          size="lg"
          type="text"
          variant="bordered"
          isClearable={true}
          onValueChange={(newValue) => setListName(newValue)}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-black",
              "border-0 shadow-none ring-0 outline-none",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-input text-black",
              "backdrop-blur-xl",
              "!cursor-text",
            ],
          }}
        />
         <Input
          label="Description"
          placeholder="Description of List"
          value={listDescription}
          size="lg"
          type="text"
          variant="bordered"
          isClearable={true}
          onValueChange={(newValue) => setListDescription(newValue)}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-black",
              "border-0 shadow-none ring-0 outline-none",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-input text-black",
              "backdrop-blur-xl",
              "!cursor-text",
            ],
          }}
        />
        <select className="bg-transparent text-black/90 dark:text-white/90 placeholder:text-black border-0 shadow-none ring-0 outline-none">
          <option>Choose a List Size</option>
          {listSizes.map((size:any) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <Input
          label="Keywords"
          placeholder="Enter keywords to generate your list"
          value={listKeywords}
          size="lg"
          type="text"
          variant="bordered"
          isClearable={true}
          onValueChange={(newValue) => setListKeywords(newValue)}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-black",
              "border-0 shadow-none ring-0 outline-none",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-input text-black",
              "backdrop-blur-xl",
              "!cursor-text",
            ],
          }}
        />
        <input type="submit" value="Submit" className="bg-button h-input text-white p-2 rounded-lg" />
      </div>

     </form>
    </>
  );
}
