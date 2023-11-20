"use client";
import { Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import puppeteer from "puppeteer";
// import { scrapeGoogleSearch } from "@/lib/functions";
export default function Page() {
  const [listName, setListName] = useState<any>("Untitled List");
  const [listDescription, setListDescription] = useState<any>(
    "A blank list description."
  );
  const [lists, setLists] = useState<any>([]);
    const [selectedList, setSelectedList] = useState<any>("");
  const [keywords, setKeywords] = useState<any>("");
  const [emails, setEmails] = useState<any>("");
  useEffect(() => {
    getLists();
  }, []);

  const handleSubmit = () => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marketing/lists/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: listName, description: listDescription }),
    })
      .then((res: any) => res.json())
      .then((data: any) => {
        getLists();
      });
  };

  const getLists = () => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marketing/lists/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res: any) => res.json())
      .then((data: any) => {
        setLists(data.results);
      });
  };

  const getData = () => {
    // Perform the fetch call here with 'chips' array
    const res = fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/marketing/get-data/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ listKeywords }),
      }
    )
      .then((res: any) => res.json())
      .then((data: any) => {
        getLists();
      });
  };

  const saveEmails = (e: any) => {
    e.preventDefault();

    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marketing/save-emails/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        emails: keywords.split("\n"),
        list: selectedList,
      }),
    })
      .then((res: any) => res.json())
      .then((data: any) => {
        debugger
      });
  };
 

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="h-full w-full flex flex-col md:flex-row items-start justify-center gap-3"
      >
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

          <input
            type="submit"
            value="Submit"
            className="bg-button h-input text-white p-2 rounded-lg"
          />
        </div>
      </form>

      <hr />

      <form
        onSubmit={saveEmails}
        className="h-full w-full flex flex-col items-start justify-center gap-3 bg-gray-300 rounded-xl"
      >
      <Select 
        label="Select an List" 
        className="max-w-xs" 
        onChange={(e) => setSelectedList(e.target.value)}
      >
         <SelectItem  key="-1" value={'-----------'}>
            -----------
          </SelectItem>
        {lists.length && lists.map((list:any) => (
          <SelectItem key={list.id} value={list.id}>
            {list.name}
          </SelectItem>
        ))}
      </Select>
      <Textarea
      value={keywords}
      onValueChange={(e:any) => {
        setKeywords(e);
      }}
      />
      <input
            type="submit"
            value="Submit"
            className="bg-button h-input text-white p-2 rounded-lg w-full"
          />
      </form>

      <hr />

      <form onSubmit={saveEmails}>
        <Textarea
          type="text"
          value={emails}
          onValueChange={(e) => {
            setEmails(e);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
