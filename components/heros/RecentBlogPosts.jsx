import {useEffect, useState} from 'react';
import {PostCard} from '@/components/common';

export default function RecentBlogPosts() {
    const [ posts, setPosts ]=useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/recent/`)
            .then(res => res.json())
            .then(data => {
                if(data&&data.length>0) {
                    setPosts(data);
                }
            });
    }, []);

    if(posts.length===0) return null;

    return (

            <div className="flex  flex-col md:flex-row flex-wrap gap-5 items-stretch justify-center">
                {posts.map((post, idx) => (
                    <div key={idx} className="  w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)]">
                        <PostCard post={post} key={idx} />
                    </div>
                ))}
        </div>
    );
}
