"use client"
import { useEffect, useState } from 'react';

export default function RecentBlogPosts() {
    const [posts, setPosts] = useState([]);

    // const { data, error, isLoading } = useGetBlogPostsQuery();

    useEffect(() => {
       const res = fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/recent/`).then(res => res.json()).then(data => {
        debugger
              setPosts(data)
         }
         )

    }, [])

    if(posts.lenth === 0) return null;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-3xl font-bold text-center">Recent Blog Posts</h1>
                <div className="prose flex flex-col gap-5 md:flex-row items-center justify-center w-full h-full">
                     {posts.map((post, idx) => {
                        return (
                            <div key={idx} className="flex flex-col p-5 items-center justify-center flex-1 rounded-lg bg-gray-300">
                                <h1>{post.title}</h1>
                                <small className='font-bold'>{post.published_at}</small>
                                <small>{post.readtime} min read</small>
                                 {/* <img src={post.image} alt="" />  */}
                                <p className="text-center">{post.content}</p>
                                <div>{post.tags.map((tag, idx) => {
                                    return (
                                        <span key={idx} className="text-xs font-bold text-white bg-gray-500 rounded-lg p-1">{tag}</span>
                                    )
                                })}</div>

<div>{post.categories.map((tag, idx) => {
                                    return (
                                        <span key={idx} className="text-xs font-bold text-white bg-gray-500 rounded-lg p-1">{tag}</span>
                                    )
                                })}</div>
                            </div>
                        )
                    } 
                    )} 
                </div>
            </div>
        </div>
    )

}



