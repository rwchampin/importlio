import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCreatePostMutation } from '@/redux/slices/apiSlice';
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

    featured_image: '',
    categories: '',
    tags: '',
    post_image_1: '',
    post_image_2: '',
    post_image_3: '',
  });

  useEffect(() => {
    console.log('form data', formData);
  }, [formData]);

  const {
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
    post_image_1,
    post_image_2,
    post_image_3,

  } = formData;

  const onChange = (event: any) => {
    debugger
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
      post_type,
      title,
      content,
      featured_image,
      categories,
      tags,
      post_image_1,
      post_image_2,
      post_image_3,
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
    post_image_1,
    post_image_2,
    post_image_3,

    isLoading,
    onChange,
    onSubmit,
  };
}
