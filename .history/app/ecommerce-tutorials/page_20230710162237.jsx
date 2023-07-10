"use client"
import { useEffect, useState } from 'react';
import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { useGetBlogPostsQuery } from '@/redux/services/blogPostsApiSlice';

export default function Page() {
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await fetch('http://localhost:8000/api/posts/');
            const data = await response.json();
            setPosts(data);
            setLoading(false);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
    
        fetchPosts();
      }, []);

    
    return <BlogList />
}