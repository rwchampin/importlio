"use client"
import { useEffect, useState } from 'react';
import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { useGetBlogPostsQuery } from '@/redux/services/blogPostsApiSlice';

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/posts/`);
            const data = await response.json();
            debugger
            setPosts(data);
            setLoading(false);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
    
        fetchPosts();
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

    return <BlogList posts={posts} />
}