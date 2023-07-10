import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { useGetBlogPostsQuery } from '@/redux/features/blogPostsApiSlice';

export default function Page() {
    const { data, error, isLoading } = useGetBlogPostsQuery();
    debugger

    
    return <BlogList />
}