"use client"
import {useEffect, useState} from 'react';
import {BasicPage} from "@/components/pages";
import {Section, PostCard} from '@/components/common';
import Sidebar from './Sidebar';
export default function Page() {
    const [ posts, setPosts ]=useState([]);

    useEffect(() => {

        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`).then(res => res.json()).then(data => {
            debugger
            setPosts(data)
        })




    }, []);

    if(posts.length===0) return null;

    return (
        <BasicPage
            theme="light"
            title="Ecommerce Dropshipping Tutorials"
            subtitle="The Official Amazon Dropshipping Handbook & Product Importer App Tutorials"
            headline="Amazon & Shopify"
            shadowText={"Amazon Dropshipping Tutorials"}
        >
            <Section className="p-5 flex">
                <div className='flex-1'>
                {posts.length===0&&<div className="text-heading-1">Dropshipping Tutorial Posts coming soon!</div>}
                <div className="grid grid-cols-1 gap-5 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post, idx) => {


                        return (

                                <PostCard key={idx} post={post} />

                        )
                    })}

                </div>
                </div>
                {(posts&&posts.length>0)&&<div className='bg-red-500 w-[300px] p-5 rounded-lg sticky top-0'>
                    <Sidebar posts={posts} />
                </div>}

            </Section>
        </BasicPage>
    )
}







