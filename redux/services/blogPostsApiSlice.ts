import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogPostsApi = createApi({
  reducerPath: 'blogPostsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api`,
    credentials: 'include', // Include credentials in the requests
  }),
  endpoints: (builder) => ({
    getBlogPosts: builder.query({
      query: () => 'posts/',
    }),
  }),
});

export const { useGetBlogPostsQuery } = blogPostsApi;

export default blogPostsApi;
