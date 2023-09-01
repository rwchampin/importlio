"use client"
import { getPosts,createNewPost } from '@/lib/api';
import { BiPlusCircle, BiPencil, BiTrash } from 'react-icons/bi';


import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


import BlogList from '@/app/components/BlogList';


export default function Page() {
    const router = useRouter();

  

    const handleClick =   () => {
        const post =  createNewPost().then((post) => {

        if (post && post.slug) {
            router.push(`/dashboard/posts/${post.slug}`);
        }
        }).catch((error) => {


            throw new Error(error + 'Post not created check Dashboard Posts Page');
        });
    };

    const columns = [
        {
            name: 'ID',
            value: 'id',
        },

        {
            name: 'Published',
            value: 'published',
        },
        {
            name: 'Post Type',
            value: 'post_type',
        },
        {
            name: 'Title',
            value: 'title',
        },
        {
            name: 'SEO Title',
            value: 'seo_title',

        },
        {
            name: 'Headline',
            value: 'headline',
        },
        {
            name: 'Subtitle',
            value: 'subtitle',
        },
        {
            name: 'Excerpt',
            value: 'excerpt',
        },
        {
            name: 'SEO Description',
            value: 'seo_description',
        },
        {
            name: 'Featured Image',
            value: 'featured_image',
        },
        {
            name: 'Post Image 1',
            value: 'post_image_1',
        },
        {
            name: 'Post Image 2',
            value: 'post_image_2',
        },
        {
            name: 'Post Image 3',
            value: 'post_image_3',
        },

        {
            name: 'Categories',
            value: 'categories',
        },
        {
            name: 'Tags',
            value: 'tags',
        },
        {
            name: 'Slug',
            value: 'slug',
        },
        {
            name: 'Updated',
            value: 'updated',
        },

    ];

    return (
        <section className="container px-4 mx-auto">
            <div
                className="flex items-center justify-end"
            >
                <button
                    onClick={handleClick}
                    className="max-w-sm inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-lime-11 bg-green-5 border-2 border-green-7 rounded-lg shadow-xl hover:bg-green-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    CREATE
                    <BiPlusCircle className="ml-2 h-5 w-5 text-lime-11" />
                </button>
            </div>
           <BlogList />
        </section>
    );
}
