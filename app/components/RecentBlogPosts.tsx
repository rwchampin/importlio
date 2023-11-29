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
    const [posts, setPosts] = useState<any>([])

   useEffect(() => {
    if(pathname === '/ecommerce-tutorials/' || pathname === '/ecommerce-tutorials') {
        return
    }

    // if(posts) return
    try {
        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?limit=3`)
            .then((res) => res.json())
            .then(({ results }) => {
                debugger
                if(!results) return
                setPosts(results)
            })
    } catch (error) {
        console.log(error)
    }
    }, [])


    if(posts.length === 0) return null
 
     
    return (
        
            <div className="w-full  flex flex-col gap-5 py-10 px-5">

                {posts.length > 0 && posts.map((post:any, idx:any) => {

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




