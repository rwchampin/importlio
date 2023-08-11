import { useBlog } from '@/store'; // Update the path accordingly
import { FullImageCard } from '@/components/blog/';

export default function RecentBlogPosts() {

    const { posts } = useBlog();
    const smaller = posts.slice(0,3);

    return (

            <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center  ">
                {smaller.map((post, idx) => <FullImageCard key={idx} post={post} />)}
            </div>

    );
}




