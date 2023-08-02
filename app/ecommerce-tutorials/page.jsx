"use client";
import { useBlogContext } from "@/store/";
import dynamic from "next/dynamic";
import {BasicPage} from "@/components/pages";
import {Section} from "@/components/common";
// import {Sidebar} from "@/components/blog";
import { useEffect } from "react";
// import { PostCardSkeleton } from "@/components/common/skeletons/";
import PostCardSkeleton  from "@/components/common/skeletons/PostCardSkeleton";
const PostCard=dynamic(() => import('@/components/common/PostCard'));

// const Sidebar=dynamic(() => import('@/components/blog/Sidebar'));
export default async function Page() {
    const { posts, loading, error } = useBlogContext();
    debugger
    useEffect(() => {
        debugger
    },[ posts, loading, error])
    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    if (loading) return <PostCardSkeleton />;
    return (
        <>

        <BasicPage
            theme="light"
            title="Ecommerce Dropshipping Tutorials"
            subtitle="The Official Amazon Dropshipping Handbook & Product Importer App Tutorials"
            headline="Amazon & Shopify"
            shadowText={"Amazon Dropshipping Tutorials"}
        >

            <Section className="p-5 flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col md:flex-row gap-5 flex-wrap">
                    {posts.map((post, idx) => {
                        return (
                        // <Suspense key={idx} fallback={<PostCardSkeleton />}>
                                <PostCard
                                    key={idx}
                                    title={post.title}
                                    content={post.content}
                                    featured_image={post.featured_image}
                                    post_type={post.post_type}
                                    tags={post.tags}
                                    categories={post.categories}
                                    slug={post.slug}
                                    published={post.published}
                                    updated={post.updated}
                                    readtime={post.readtime}
                                />
                        // </Suspense>
                        );
                    })}
                </div>
                {/* <div className='w-full lg:w-1/4'>
                    <Sidebar />
                </div> */}
            </Section>

        </BasicPage>
        </>
    );
}
