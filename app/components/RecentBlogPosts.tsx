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
    // if pathname contains ecommerce-tutorials, return
    if(
        pathname.includes('ecommerce-tutorials') ||
        pathname.includes('search') ||
        pathname.includes('dashboard')
        ){
        return 
    }

    if(posts.length) return
    try {
        fetch(`/api/posts/recent/`)
            .then((res) => res.json())
            .then(({ results }) => {
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




