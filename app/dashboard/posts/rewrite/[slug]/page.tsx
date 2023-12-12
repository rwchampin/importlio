import Dashboard from "@/app/dashboard/Dashboard";

import Rewrite from "./Rewrite";

export default async function Page({ params: { slug } }: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}/`);
  let post = await res.json();


  return (
    <Dashboard>
     <Rewrite />
    </Dashboard>
  );
}
