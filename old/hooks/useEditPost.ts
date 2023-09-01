import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useEditPostMutation } from '@/old/utils/redux/services/apiSlice';
import { toast } from 'react-toastify';
import {getPost} from '@/lib/functions'
export default async function useEditPost( slug ) {
  const post = await getPost(slug)
  const [editPost, { isLoading }] = useEditPostMutation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    headline: post.headline,
    subtitle: post.subtitle,
    shadow_text: post.shadow_text,
    excerpt: post.excerpt,
    seo_title: post.seo_title,
    seo_description: post.seo_description,
    post_type: post.post_type,
    title: post.title,
    content: post.content,
    status:post.status,
    featured_image: post.featured_image,
    categories: post.categories,
    tags: post.tags,
    id: post.id,
  });
 

  const {
    headline,
    subtitle,
    shadow_text,
    excerpt,
    seo_title,
    seo_description,
    status,
    post_type,
    title,
    content,
    featured_image,
    categories,
    tags,
    id

  } = formData;

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();



    editPost({
      headline,
      subtitle,
      shadow_text,
      excerpt,
      seo_title,
      seo_description,
      post_type,
      title,
      content,
      featured_image,
      categories,
      tags,
      status,
      id
    })
      .unwrap()
      .then(() => {
        toast.success('Post Updated successfully');
        router.push('/dashboard/posts/');
      })
      .catch(() => {
        toast.error('Failed to create Post');
      });
  };

  return {
    headline,
    subtitle,
    shadow_text,
    excerpt,
    seo_title,
    seo_description,

    title,
    content,
    post_type,
    featured_image,
    categories,
    tags,
    status,

    isLoading,
    onChange,
    onSubmit,
  };
}
