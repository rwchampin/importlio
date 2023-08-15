import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useEditPostMutation } from '@/redux/slices/apiSlice';
import { toast } from 'react-toastify';

export default function useEditPost(slug:any) {
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

    featured_image: '',
    categories: '',
    tags: '',
    post_image_1: '',
    post_image_2: '',
    post_image_3: '',
  });

  const getPost = async (slug: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}`);
    const json = await res.json();
    const {results} = json;
    debugger;
  }
  useEffect(() => {
   const p = getPost(slug);
  }, []);

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
