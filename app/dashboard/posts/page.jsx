'use client';
import { useBlog } from '@/store';
import { BiPlusCircle, BiPencil, BiTrash } from 'react-icons/bi';
import Link from 'next/link';

export default function Page() {
    const { posts } = useBlog();
    const columns = [

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

    const PostImage = ({ post_image }) => {
        return <img className="h-10 w-10 rounded-full" src={post_image} alt="" />
    }
    const PostType = ({ post_type }) => {
        return <span className="text-xs px-2 inline-flex leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">{post_type.name}</span>
    }

    debugger
    return (
        <section className="container px-4 mx-auto">
            <div
                className="flex items-center justify-end"
            >
                <Link
                    href="/dashboard/posts/create"
                    className="max-w-sm inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-lime-11 bg-green-5 border-2 border-green-7 rounded-lg shadow-xl hover:bg-green-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    CREATE
                    <BiPlusCircle className="ml-2 h-5 w-5 text-lime-11" />
                </Link>
            </div>
            <div className="flex flex-col mt-6">

                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800 w-full h-auto">
                                    <tr>
                                        <th scope="col" className="relative px-4 py-3">
                                            <input
                                                type="checkbox"
                                                name="select_all"
                                                id="select_all"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                        </th>
                                        {columns.map((header, idx) => (
                                            <th
                                                key={idx}
                                                scope="col"
                                                className=" whitespace-nowrap py-3.5 px-4 text-xs font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                {header.name}
                                            </th>
                                        ))}
                                        <th scope="col" className="relative py-3.5 px-4">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 overflow-y-auto">
                                    {posts.map((post, idx) => (
                                        <tr key={idx}>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <input
                                                    type="checkbox"
                                                    name="select_all"
                                                    id="select_all"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                            </td>
                                            {columns.map((col, idx) => {
                                                if (col.value === 'post_type') {
                                                    return (
                                                        <td className="px-4 py-4 whitespace-nowrap">
                                                            <span className="px-2 text-xs inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">

                                                                <PostType key={idx} post_type={post[col.value]} />
                                                            </span>
                                                        </td>
                                                    )
                                                }
                                                if (col.value === 'featured_image') {
                                                    return (
                                                        <td className="px-4 py-4 whitespace-nowrap">
                                                            <span className="px-2 text-xs inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                <PostImage key={idx} post_image={post[col.value]} />
                                                            </span>
                                                        </td>
                                                    )
                                                }


                                                return (
                                                    <td className="px-4 py-4 whitespace-nowrap">
                                                        <span className="px-2 text-xs inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {post[col.value]}
                                                        </span>
                                                    </td>
                                                )
                                            })}

                                            <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium flex gap-1">
                                               <Link href={`/dashboard/posts/${post.slug}`}>
                                               <BiPencil className="text-green-11 h-5 w-5" />
                                                  </Link>
                                                <BiTrash className="text-red-11  h-5 w-5" />
                                            </td>
                                            {/* <td className="px-4 text-xs py-4 whitespace-nowrap">
                                                {post.title}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <span className="text-xs px-2 inline-flex leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">{post.post_type.name}</span>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                            <img src={post.featured_image} alt={post.title} className="w-10 h-10 rounded-full" />
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {post.categories.map((category, idx) => (
                                                    <span className='text-xs rounded-full bg-blue-3 text-blue-11 px-3 py-2' key={idx}>{category.name}</span>
                                                ))}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                {post.tags.map((tag, idx) => (
                                                    <span key={idx} className="text-xs first-letter:rounded-full bg-green-3 text-green-11 px-3 py-2">{tag.name}</span>
                                                ))}
                                            </td>
                                              */}
                                            {/* <td className="relative px-4 py-4">
                                                <button className="text-gray-400 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                                                    <span className="sr-only">Edit</span>
</button>
                                            </td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
