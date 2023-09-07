import { getRecentPosts } from '@/lib/api';
import Card from '@/app/components/Card';
export default async function RecentBlogPosts() {

    const posts = await getRecentPosts();
    
    return (

            <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center  ">
                {posts.map((post, idx) => <Card key={idx} post={post} />)}
            </div>

    );
}




