"use client";
import { getRecentPosts } from '@/lib/api';
import { useState, useEffect } from 'react';
import Spinner from '@/app/components/Spinner';
import Card from '@/app/components/Card';

export default function RecentBlogPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getRecentPosts();
            debugger
            setPosts(posts);
        };

        if(posts.length === 0){
            fetchPosts();
        }

    }, []);


    if(posts && posts.length === 0){
        return <Spinner lg />
    }

    return (

            <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center  ">
                {posts.map((post, idx) => <Card key={idx} post={post} />)}
            </div>

    );
}




