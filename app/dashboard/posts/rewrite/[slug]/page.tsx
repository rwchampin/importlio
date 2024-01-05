
import Dashboard from "@/app/dashboard/Dashboard";

import Rewrite from "./Rewrite";


const getPosts = async () => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/posts/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
}

const batchSubmit = async (e: any) => {
"use server"
  const pp = getPosts();
  const hh = getPosts();

  const [ppp, hhh] = await Promise.all([pp, hh]);
  debugger
  return [ppp, hhh];
}


export default function Page({ params: { slug } }: any) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}/`);
  // let post = await res.json();


  return (
    <Dashboard>
     <Rewrite batchSubmit={batchSubmit}  />
    </Dashboard>
  );
}
