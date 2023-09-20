"use client"
import React, { useEffect, useState } from 'react';
import {
  getRecentPosts,
  getCategories,
  getTags,
} from '@/lib/api';
import TagCloud from '@/app/components/TagCloud';
import SidebarCard from './SidebarCard';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsRes =  getRecentPosts();
        const categoriesRes =  getCategories();
        const tagsRes =  getTags();

        const [posts, categories, tags] = await Promise.all([postsRes,tagsRes, categoriesRes])

        setPosts(posts);
        setCategories(categories);
        setTags(tags);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if(posts.length === 0 && categories.length === 0 && tags.length === 0){
      fetchData();
    }
  }, []);

  useEffect(() => {
    const show =(pathname === '/' || pathname === '') ? false : true;
    if(show !== showSidebar) {
      setShowSidebar(show);
    }
  }, [pathname]);

  if(!showSidebar || !posts){
    return null;
  }
  return (
    <div className="sidebar w-full lg:max-w-[400px] bg-gray-2 p-3 overflow-y-scroll shadow-xl rounded-lg h-[calc(100vh-6rem)] flex flex-col sticky top-[5rem]">
      <div className="flex-auto flex flex-col gap-3">
        {posts && posts.map((post, idx) => (
          <SidebarCard key={idx} post={post} />
        ))}

        {tags && <TagCloud data={tags} type="tags" className="bg-gray-300 shadow-xl" />}
       {categories &&<TagCloud
          data={categories}
          type="categories"
          className="bg-gray-300 shadow-xl"
        />}
      </div>
    </div>
  );
}

export default Sidebar;
