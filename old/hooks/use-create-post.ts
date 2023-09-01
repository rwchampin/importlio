import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCreatePostMutation } from '@/old/utils/redux/features/authApiSlice'
import { toast } from 'react-toastify';

export default function useCreatePost() {
  const router = useRouter();
  const [createPost, { isLoading }] = useCreatePostMutation();

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
    status: '',
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





    createPost({
      headline,
      subtitle,
      shadow_text,
      excerpt,
      seo_title,
      seo_description,
      // post_type,
      title,
      content,
      // status,
      featured_image,
      // categories,
      // tags,
    })
      .unwrap()
      .then(() => {
        toast.success('Post created successfully');
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
