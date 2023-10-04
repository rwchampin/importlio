// import SidebarCard from '../SidebarCard';

import { getRecentPosts } from '@/lib/api';
 
export default async function PostFeed() {
    const posts = await getRecentPosts();

  return (
    <>
    {posts.map((post:any) => (
        <h3 key={post.id}>{post.title}</h3>
        // <SidebarCard key={post.id} post={post} />
    ))}
    </>
    )
}
