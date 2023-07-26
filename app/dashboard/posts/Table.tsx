import Link from 'next/link';
import { Input } from '@/components/forms';
interface Post {
  title: string;
  slug: string;
  published_at: Date;
  updated_at: Date;
  read_time: number;
  likes: number;
  dislikes: number;
}

interface Posts {
  posts: Post[];
}

export default function Table({ posts }: Posts) {
  const th = [
    {
      name: "Title",
    },
    {
      name: "Slug",
    },
    // {
    //   name: "Tags",
    // },
    // {
    //   name: "Categories",
    // },
    {
      name: "Edit",
    },
  ];
	
	const cols = [
    {
		data: 'title',
		},
		{
			data: 'slug',
		},
		// {
		// 	data: 'tags',
		// },
		// {
		// 	data: 'categories',
		// },

  ];
  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Posts
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {posts.length} posts
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
            These companies have purchased in the last 12 months.
          </p>
        </div>

        <div className="flex items-center mt-4 gap-x-3">
          <Link
            href="/dashboard/posts/create/"
            className="flex items-center justify-center w-1/2 px-5 py-2 text-xs tracking-wide text-white transition-colors duration-200 bg-emerald-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

				Create Post
          </Link>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className="mt-6 md:flex md:items-center md:justify-end">

           
			  <Input
				  type='search'
				  placeholder='Search'
				  className="w-full"
				  labelId='search'
				  label='Search'
				  onChange={() => console.log('searching...')}
				  value=''
				  required={false}
			  />
          
      </div>

      {/* END TOOLBAR */}

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="overflow-hidden min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="flex bg-gray-50 dark:bg-gray-800 h-[50px]">
                  {th.map((t) => (
                    <th className="flex-1 text-xs font-bold text-left text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      {t.name}
                    </th>
                  ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 overflow-scroll h-[400px]">
                  {posts.map((post: any, idx: number) => (
                    <tr key={idx}>
                      <td className="flex-1 text-xs font-bold">{post.title}</td>
                      <td className="flex-1 text-xs font-bold">{post.slug}</td>
                      {/* <td className="px-4 py-4 text-xs">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            {post.published_at}
                          </h4>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-xs">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            {post.updated_at}
                          </h4>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-xs">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            {post.read_time}
                          </h4>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-xs">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            {post.likes}
                          </h4>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-xs">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            {post.dislikes}
                          </h4>
                        </div>
                      </td> */}

                      <td className="flex-1 text-xs">
                        <button className="text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            />
                          </svg>
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

      <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Page{" "}
          <span className="font-medium text-gray-700 dark:text-gray-100">
            1 of 10
          </span>
        </div>

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
          <a
            href="#"
            className="flex items-center justify-center w-1/2 px-5 py-2 text-xs text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <a
            href="#"
            className="flex items-center justify-center w-1/2 px-5 py-2 text-xs text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
