
import { useAppDispatch } from '@/redux/hooks';
import Card from '@/app/components/Card';

export default function RecentBlogPosts() {
    const { posts } = useAppDispatch(state => state.blog);

    

 
    return (

            <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center py-10 ">
                {posts && posts.map((post, idx) => <Card key={idx} post={post} />)}
            </div>

    );
}




