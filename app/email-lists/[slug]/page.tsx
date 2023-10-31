
import BasePage from "@/app/components/BasePage";
import dynamic from "next/dynamic";
import Link from "next/link";
// import type { Metadata } from "next";

// import Section from "@/app/components/Section";

// import Statistic from "@/app/components/email-lists/Statistic";

// import { Button } from "@nextui-org/react";

// import { useEffect, useState } from "react";

export async function generateMetadata({ params }:any) {
    const { slug } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marketing/lists/${slug}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const list= await res.json()

    return {
        title: `Download our ${list.name} email list for free`,
        description: list.description,
        keywords: list.keywords
    }


}
const Statistic: any = dynamic(() => import("@/app/components/email-lists/Statistic"))
export default async function Page({
    params
}: {
    params: {
        slug: string
    }
}) {

    const { slug } = params;

            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marketing/lists/${slug}/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const list= await res.json()
            debugger

    const handleDownload = async () => {}
   


    return (
 
        <BasePage
            title={list.name}
            subtitle={<div><Link target="_blank" href="/auth/register/"><u>Subscribe</u></Link> today & download this email list for free.</div>}
            headline={list.name}
            shadowText={`${list.name} Email List`}
            >
            <section className="bg-gray-200 rounded-lg p-5 shadow-lg gap-3 flex flex-wrap">
                <p>
                    {list.description}
                </p>

                    {list.statistics.length && <Statistic statistics={list.statistics} />}

                 
            </section>
            </BasePage>
        
    );
        
}