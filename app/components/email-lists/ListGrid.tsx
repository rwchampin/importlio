// "use client";
// import { useState } from "react"
import EmailList from './EmailList'
export default async function ListGrid() {
  // const [results, setResults] = useState([])
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marketing/list-previews/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    const {results} = await res.json()

  return (
    <section className="bg-gray-200 rounded-lg p-5 shadow-lg gap-3 flex flex-wrap">
        {results.map((list: any) => (
          <EmailList key={list.id} list={list} />
        ))}
      </section>
  )
}
