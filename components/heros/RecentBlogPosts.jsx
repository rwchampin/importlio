"use client"
import { useEffect, useState } from 'react';
import { PostCard } from '@/components/common';
export default function RecentBlogPosts() {
    const [ posts, setPosts ]=useState([]);


    useEffect(() => {
        const res=fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/recent/`).then(res => res.json()).then(data => {
            if(data&&data.length>0) {

                setPosts(data)
            }
        }
        )

    }, [])

    if(posts.length===0) return null;

    return (
        <div className="recent-posts p-5 flex flex-col items-center justify-center w-fill py-10 my-10">

            <h1 className="text-3xl font-bold text-center">Recent Blog Posts</h1>
            {/* <div className="grid grid-cols-1 gap-1 items-center justify-center auto-rows-max md:grid-cols-2 lg:grid-cols-3"> */}
            <div className='flex flex-col md:flex-row flex-wrap mt-5 gap-5 items-start justify-center'>
                {posts.map((post, idx) => {
                    return (
                        <div key={idx} className='w-full md:w-1/3 lg:w-1/4 h-full place-items-stretch'>
                            <PostCard post={post} key={idx} />
                        </div>
                    )
                }
                )}
            </div>

        </div>
    )

}



