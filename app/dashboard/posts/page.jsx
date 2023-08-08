'use client';
import { useBlog } from '@/store';

export default function Page() {
    const { posts } = useBlog();
    const headers = [
       
        {
            name: 'Published',
        },
        {
            name: 'Title',
        },
        {
            name: 'Post Type',
        },
        {
            name: 'Featured Image',
        },
         
        
        {
            name: 'Categories',
        },
        {
            name: 'Tags',
        },
        {
            name: 'Actions',
        }
    ];

    return (
        <section className="container px-4 mx-auto">
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800 w-full">
                                    <tr>
                                        {headers.map((header, idx) => (
                                            <th
                                                key={idx}
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
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
                                               <span className="px-2 text-xs inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">{post.published}</span>
                                            </td>
                                            <td className="px-4 text-xs py-4 whitespace-nowrap">
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
                                             
                                            <td className="relative px-4 py-4">
                                                <button className="text-gray-400 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                                                    <span className="sr-only">Edit</span>
</button>
                                            </td>
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
