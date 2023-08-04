import { useBlog, useCore } from '@/store'; // Update the path accordingly
import { FullImageCard } from '@/components/blog/';
export default async function RecentBlogPosts() {

    const { posts } = useBlog();

    return (
            <div className="flex flex-col gap-5 md:flex-row md:items-center justify-center shrink-0">
                {posts.map((post, idx) => <FullImageCard key={idx} post={post} />)}
            </div>
    );
}
