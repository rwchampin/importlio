import Image from 'next/image'
import { Badge } from '@/components/common'
import { FiMoreVertical } from 'react-icons/fi'
export default function Table({posts}){

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                 <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                    <div className="flex items-center flex-1 space-x-4">
                        <h5 className="block">
                            <span className="text-gray-500">Posts:</span>
                            <span className="dark:text-white">{posts.length}</span>
                        </h5>
                        {/* <h5>
                            <span className="text-gray-500">Total sales:</span>
                            <span className="dark:text-white">$88.4k</span>
                        </h5> */}
                    </div>
                    <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                        <button type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-green11 rounded-lg bg-green1 border-3 border-green7 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Add new Post
                        </button>
                        <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            Update stocks 1/250
                        </button>
                        <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                            Export
                        </button>
                    </div>
                </div>  
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3">Published</th>
                                <th scope="col" className="px-4 py-3">Title</th>
                                <th scope="col" className="px-4 py-3">Slug</th>
                                <th scope="col" className="px-4 py-3">Post Type</th>
                                <th scope="col" className="px-4 py-3">Featured Image</th>
                                <th scope="col" className="px-4 py-3">Post Image 1</th>
                                <th scope="col" className="px-4 py-3">Post Image 2</th>
                                <th scope="col" className="px-4 py-3">Post Image 3</th>
                                <th scope="col" className="px-4 py-3">Edit</th>

                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post,i)=> {
                                return (
                            <tr key={i} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td className="w-4 px-4 py-3">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center justify-center  text-xxs  font-medium text-gray-900   whitespace-nowrap dark:text-white">
                                    {/* <Image fill src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3" /> */}
                                   {post.published}
                                </th>
                                <td className="px-4 py-2 text-xxs">
                                        {post.title}
                                </td>
                                <td className="px-4 py-2  font-medium   text-gray-900 whitespace-nowrap dark:text-white text-xxs">
                                        {post.slug}
                                </td>
                                <td className="px-4 py-2 font-medium text-xxs text-gray-900 whitespace-nowrap dark:text-white">
                                   <Badge type="info" showClose={true}>
                                   {post.post_type.name}
                                   </Badge>
                                </td>
                                <td className=" px-4 py-2 font-medium text-xxs text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image 
                                        src={post.featured_image}
                                        height={80}
                                        width={80}
                                        alt="Amazon Dropshipping Product Importer App"
                                        />
                                </td>
                                <td className="px-4 py-2 font-medium text-xxs text-gray-900 whitespace-nowrap dark:text-white">
                                    {post.post_image_1 ? (
                                        <Image 

                                        src={post.featured_image}
                                        height={80}
                                        width={80}
                                        alt="Amazon Dropshipping Product Importer App"
                                        />
                                    ): (
                                        <div className="h-[40px] w-[80px] bg-offgray" />
                                    )}
                                </td>
                                <td className="px-4 py-2 font-medium text-xxs text-gray-900 whitespace-nowrap dark:text-white">

                                         
                                        {post.post_image_2 ? (
                                        <Image 
                                        src={post.featured_image}
                                        height={80}
                                        width={80}
                                        alt="Amazon Dropshipping Product Importer App"
                                        />
                                    ): (
                                        <div className="h-[40px] w-[80px] bg-offgray" />
                                    )}

                                </td>
                                <td className="px-4 py-2">
                                    {post.post_image_3 ? (
                                        <Image 
                                        src={post.featured_image}
                                        height={80}
                                        width={80}
                                        alt="Amazon Dropshipping Product Importer App"
                                        />
                                    ): (
                                        <div className="h-[40px] w-[80px] bg-offgray" />
                                    )}
                                </td>
                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <FiMoreVertical className="w-5 h-5" />
                                </td>
                            </tr>
                            )}
                            )}
                        </tbody>
                    </table>
                </div>
                {/* <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing
                        <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                        of
                        <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                    </span>
                    <ul className="inline-flex items-stretch -space-x-px">
                        <li>
                            <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>  */}
            </div>
        </div>
    </section>
  )
}