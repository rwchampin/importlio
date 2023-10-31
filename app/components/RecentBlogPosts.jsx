
// import { useAppDispatch } from '@/redux/hooks';
import Card from '@/app/components/Card';

export default async function RecentBlogPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/recent`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const { results } = await res.json();
    const posts = results;
    // const { posts } = useAppDispatch(state => state.blog);

    

 
    return (

            <div className="flex-wrap w-full  flex flex-col gap-5 md:flex-row items-stretch justify-center py-10 ">
                {posts && posts.map((post, idx) => <Card key={idx} post={post} />)}
            </div>

    );
}




