"use client"
import BasePage from "@/app/components/BasePage";

import Section from "@/app/components/Section";

import Statistic from "@/app/components/email-lists/Statistic";

import { Button } from "@nextui-org/react";

import { useEffect, useState } from "react";
export default function Page({
    params
}: {
    params: {
        slug: string
    }
}) {
    const [listData, setListData] = useState<any>(null)
    const { slug } = params;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/marketing/lists/${slug}/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            debugger
            const data = await res.json()
            debugger
            setListData(data)
        }
        fetchData()

    }, [])

    const handleDownload = async () => {}
    return (
        <BasePage
            title={`Custom Email Marketing List of ${slug} Subscribers`}
            headline="Increase Sales with"
            subtitle={`Market your products to our best ${slug} subscribers, boost profits, and grow your business!`}
            shadowText={`${slug} Email Marketing List`}
            customComponent={
                <Button>Download Now</Button>
            }
        >
        <Section>
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

                {listData && listData.statistics.map((data: any, i:any) => (
                    <Statistic statistic={data} index={i} key={i} />
                ))}
                 
            </section>
        </Section>
        </BasePage>
    );
        
}