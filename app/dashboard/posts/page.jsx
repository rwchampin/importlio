
import { getPosts } from '@/lib/functions';
import { BiPlusCircle, BiPencil, BiTrash } from 'react-icons/bi';
import Link from 'next/link';

export default async function Page() {
    const posts = await getPosts();
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

    const PostImage = ({ post_image }) => {
        if(!post_image) return <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        return <img height={50} width={50} className="h-10 w-10 rounded-full" src={post_image} alt="" />
    }
     

    const td = `min-w-[150px] px-4 py-4 whitespace-nowrap text-center text-xs flex items-center justify-center`
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
                                                className="min-w-[150px] text-center whitespace-nowrap py-3.5 px-4 text-xs font-normal  rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                {header.name}
                                            </th>
                                        ))}
                                        <th scope="col" className="relative py-3.5 px-4 text-center">
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
                                            <td className={td}>
                                                {post.id}
                                            </td>
                                            <td className={td}>
                                                {post.published} 
                                            </td>
                                            <td className={td}>
                                                {post.post_type.name}
                                            </td>
                                            
                                            <td className={td}>
                                                {post.title}
                                            </td>
                                            <td className={td}>
                                                {post.seo_title}
                                            </td>
                                            <td className={td}>
                                                {post.headline}
                                            </td>
                                            <td className={td}>
                                                {post.subtitle}
                                            </td>
                                            <td className={td}>
                                                {post.excerpt}
                                            </td>
                                            <td className={td}>
                                                {post.seo_description}
                                            </td>
                                            <td className={td}>
                                                <PostImage post_image={post.featured_image} />
                                            </td>
                                            <td className={td}>
                                            <PostImage post_image={post.post_image_1} />

                                            </td>
                                            <td className={td}>
                                            <PostImage post_image={post.post_image_2} />
                                            </td>
                                            <td className={td}>
                                            <PostImage post_image={post.post_image_3} />
                                            </td>
                                            <td className={td}>
                                                {post.categories.length}
                                            </td>
                                            <td className={td}>
                                                {post.tags.length}
                                            </td>
                                             
                                            <td className={td}>
                                                {post.updated}
                                            </td>
                                            <td className="min-w-[150px] px-4 py-4 whitespace-nowrap text-center text-xs font-medium flex items-center justify-center gap-1">
                                               <Link href={`/dashboard/posts/edit/${post.slug}`}>
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
