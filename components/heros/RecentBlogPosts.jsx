import React,{ Suspense } from 'react';
import { useBlogContext } from '@/store'; // Update the path accordingly
import { FullImageCard } from '@/components/ecommerce-tutorials/';
import { RecentPostsSkeleton } from '../common/skeletons';

export default async function RecentBlogPosts() {
  const { posts, loading,error } = useBlogContext();
    debugger
  if (loading) return <RecentPostsSkeleton />;
  
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center justify-center shrink-0">
      {posts.map((post, idx) => (

         <Suspense key={idx} fallback={<RecentPostsSkeleton />}>
        <FullImageCard
          key={idx}
          post={post} // Pass the entire post data as a prop
        />
        </Suspense>
      ))}
    </div>
  );
}
