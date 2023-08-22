import { getRecentPosts } from "@/lib/functions";
import { FullImageCard } from '@/components/blog/';

export default async function RecentBlogPosts() {
    const posts = await getRecentPosts();
    return (

            <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center  ">
                {posts.map((post, idx) => <FullImageCard key={idx} post={post} />)}
            </div>

    );
}




