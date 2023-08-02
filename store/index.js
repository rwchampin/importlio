"use client"
import { useFetch } from '@/hooks';
import React, { createContext, useContext, useEffect, useState } from 'react';

const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data.results; // Assuming the API response has an array of posts in the 'results' property
}

const BlogContext = createContext();

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, isLoading }}>
      {children}
    </BlogContext.Provider>
  );
};
