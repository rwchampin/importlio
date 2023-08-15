"use client"

import { TagCloud } from "@/components/common";
import { unslugify } from "@/utils/string";
import { FullImageCard, Sidebar } from "@/components/blog";
import { BasicPage } from "@/components/pages";
export default async function Page({ params }) {
    const { slug } = params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/${slug}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await res.json()
    const items = json.results;

    const pretty = unslugify(slug)

    return (
        <BasicPage
        title={`Ecommerce Tutorials`}
        subtitle={`Tagged with ${pretty}`}
        shadowText={`List of ${pretty}`}
       >
        <div className="flex-auto flex items-center justify-center">
           <div 
            className="flex-auto"
           >
           {items.map((item, idx) => (
                <FullImageCard key={idx} post={item} />
            ))}
           </div>
           <div className="w-full max-w-[300px]">
                <Sidebar />
           </div>
        </div> 
        </BasicPage>
    )
}