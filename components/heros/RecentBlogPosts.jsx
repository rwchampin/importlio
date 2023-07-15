"use client"
import { useGetBlogPostsQuery } from '@/redux/services/blogPostsApiSlice';
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

 

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-3xl font-bold text-center">Recent Blog Posts</h1>
                <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
                     {posts.map((post, idx) => {
                        debugger
                        return (
                            <div key={idx} className="flex flex-col items-center justify-center w-full h-full">
                                <h1 className="text-2xl font-bold text-center">{post.title}</h1>
                                 {/* <img src={post.image} alt="" />  */}
                                <p className="text-center">{post.content}</p>
                            </div>
                        )
                    } 
                    )} 
                </div>
            </div>
        </div>
    )

}



