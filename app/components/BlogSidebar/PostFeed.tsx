 
import { getRecentPosts } from "@/lib/api";

import ClientContent from "./ClientContent";
export default async function PostFeed( ) {
 
  const posts = await getRecentPosts()
  
 return <ClientContent posts={posts} />
}
