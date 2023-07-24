"use client"
import { useEffect, useState } from 'react';
import { PostCard, Modal } from '@/components/common';
import { BasicPage } from "@/components/pages";

export default function Page() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

              fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`).then(res => res.json()).then(data => {
                  debugger
                  setPosts(data)
              })
           

         

      }, []);

    

    return (
      <BasicPage
        theme="light"
        title="Ecommerce Dropshipping Tutorials"
        subtitle="The Official Amazon Dropshipping Handbook & Product Importer App Tutorials"
        headline="Amazon & Shopify"
            cta={<Modal />}
            shadowText={"Amazon Dropshipping Tutorials"}
        >

        {posts.length === 0 && <div className="text-heading-1">Dropshipping Tutorial Posts coming soon!</div>}
            {posts.length>0&&<div className="grid grid-cols-1 gap-5 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {posts.length&&posts.map((post, idx) => {
                 

                    return (
                        <PostCard post={post} key={idx} />
                    )
                })}
            
            </div>}



        </BasicPage>
    )
}

 





