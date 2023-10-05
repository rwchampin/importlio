
import BasePage from "@/app/components/BasePage";

// import Section from "@/app/components/Section";

import Statistic from "@/app/components/email-lists/Statistic";

// import { Button } from "@nextui-org/react";

// import { useEffect, useState } from "react";
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


    const handleDownload = async () => {}
    if(list.statistics && list.statistics.length === 0) {
        return null
    }
    return (
        <BasePage
            title={list.name}
            subtitle="Download this email list for free."
            headline={list.name}
            shadowText="Email List"
            >
            <section className="bg-gray-200 rounded-lg p-5 shadow-lg gap-3 flex flex-wrap">


                    <Statistic statistics={list.statistics} />

                 
            </section>
            </BasePage>
    );
        
}