"use client"
import Card from '@/app/components/Card';

// const findBlogPostsByPropertyAndName = (blogPosts:any, type:any=null, name:any=null) => {
//     if (!type || !name) {
//       return blogPosts;
//     }
//     // Filter the blog posts based on the specified type and name
//     const filteredBlogPosts = blogPosts.filter((post:any) => {
//       if (post[type] instanceof Array) {
//         // Handle properties that are arrays (e.g., 'tags', 'categories')
//         const items = post[type].map((item:any) => item.name.toLowerCase());
//         return items.includes(name.toLowerCase());
//       } else if (typeof post[type] === 'string') {
//         // Handle properties that are strings (e.g., 'title', 'excerpt')
//         return post[type].toLowerCase().includes(name.toLowerCase());
//       } else {
//         // Handle other property types (e.g., 'read_time', 'published')
//         return false; // Modify this based on your specific requirements
//       }
//     });
  
//     return filteredBlogPosts;
//   };
  
 
  
export default function BlogPageClientContent({ posts }:any) {


    return (
        <div className="flex flex-col w-full max-w-[90vw] mx-auto gap-3">
        {posts.map((post:any, idx:number) => {
            return (

                   <Card key={idx} post={post} />

            )
        })}
        </div>
  )
}
