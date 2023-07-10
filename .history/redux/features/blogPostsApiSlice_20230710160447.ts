import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api`,
});

export const blogPostsApi = createApi({
  reducerPath: 'blogPostsApi',
  baseQuery,
  endpoints: (builder) => ({
    getBlogPosts: builder.query({
      query: () => '/post-api/posts/',
    }),
  }),
});

export const { useGetBlogPostsQuery } = blogPostsApi;
