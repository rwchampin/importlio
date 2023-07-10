import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogPostsApi = createApi({
  reducerPath: 'blogPostsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (builder) => ({
    getBlogPosts: builder.query({
      query: () => 'posts/',
    }),
  }),
});

export const { useGetBlogPostsQuery } = blogPostsApi;

export default blogPostsApi;
