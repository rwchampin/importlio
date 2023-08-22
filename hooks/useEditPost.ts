import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useEditPostMutation } from '@/redux/slices/apiSlice';
import { toast } from 'react-toastify';

export default function useEditPost() {
  const [editPost, { isLoading }] = useEditPostMutation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    headline: '',
    subtitle: '',
    shadow_text: '',
    excerpt: '',
    seo_title: '',
    seo_description: '',
    post_type: '',
    title: '',
    content: '',
    status:'',
    featured_image: '',
    categories: '',
    tags: '',

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
      status
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
