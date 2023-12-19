"use client";
// import { useAppDispatch } from '@/redux/hooks';
import Card from '@/app/components/Card';


import {  useState, useEffect } from 'react';


export default function RecentBlogPosts(){

    // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/recent/`)
    // const { results } = await res.json()
    // const posts = results
    const [posts, setPosts] = useState<any>([])

   useEffect(() => {
  

    if(posts.length>0) return
    try {
        fetch(`/api/posts/recent/`)
            .then((res) => res.json())
            .then(({ recentPosts }) => {
                if(!recentPosts) return
                setPosts(recentPosts)
            })
    } catch (error) {
        console.log(error)
    }
    }, [])


 
     
    return (
        
            <div className="w-full  flex flex-col gap-5 py-10">

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




