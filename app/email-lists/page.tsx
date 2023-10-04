"use client";
import BasePage from "@/app/components/BasePage";

import EmailList from "@/app/components/email-lists/EmailList";
 
import { useEffect, useState } from "react";


export default function Page() {
  const [lists, setLists] = useState([]);


  useEffect(() => {
    const getData = async () => {
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marketing/list-previews/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { results } = await res.json();

      setLists(results);
      }

      if(lists.length === 0) {
        getData();
      }

  }, []);

  return (
    <BasePage
      title="Getting new Customers & Increasing Sales"
      headline="The official guide to"
      subtitle="Download a free email list of 100 subscribers in your niche. No credit card required."
      shadowText="Email Marketing"
    >
      <p>
        At Importlio, we have a large collection of email lists that you can use
        to get new customers and increase sales. Our subscribers are updated
        daily and are ready to buy your products in your specific niche. We
        source the best email subscribers from Linkedin, Facebook, Instagram,
        Twitter, and other social media platforms. Build your own email list or
        choose from our list of email lists. We have email subscribers in every
        niche.
      </p>

      <section className="bg-gray-200 rounded-lg p-5 shadow-lg gap-3 flex flex-wrap">
        {lists.map((list: any) => (
          <EmailList key={list.id} list={list} />
        ))}
      </section>
      
      <section className="bg-gray-200 rounded-lg p-5 shadow-lg">
        <h4>Get a FREE Email list</h4>
        <h5>How it works</h5>
        <ul role="list">
          <li>Register for free</li>
          <li>Choose any list</li>
          <li>Download it for free</li>
        </ul>
      </section>
    </BasePage>
  );
}
