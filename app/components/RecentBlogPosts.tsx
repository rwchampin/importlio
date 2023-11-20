"use client";
// import { useAppDispatch } from '@/redux/hooks';
import Card from '@/app/components/Card';
import { usePathname } from 'next/navigation';

import {  useState, useEffect } from 'react';


export default function RecentBlogPosts(){
    const pathname = usePathname();
    // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/recent/`)
    // const { results } = await res.json()
    // const posts = results
    const [posts, setPosts] = useState<any>(null)

   useEffect(() => {
    if(pathname === '/ecommerce-tutorials/' || pathname === '/ecommerce-tutorials') {
        return
    }

    if(posts) return
    try {
        fetch(`/api/posts/recent/`)
            .then(res => res.json())
            .then(({posts}) => {
                setPosts(posts)
            })
    } catch (error) {
        console.log(error)
    }
    }, [])



 
     
    return (
        
            <div className="bg-gray-300 w-full  flex flex-col gap-5 py-10 px-5">
               
                {posts && posts.length && posts.map((post:any, idx:any) => {

                    return (
                        <Card
                            key={idx}
                            post={post}
                        />
                    )
                })}
              
            </div>

    );
}




