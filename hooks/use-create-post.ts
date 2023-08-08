import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useCreatePostMutation } from '@/redux/slices/apiSlice';
import { toast } from 'react-toastify';

export default function useCreatePost() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [createPost, { isLoading }] = useCreatePostMutation();

  const [formData, setFormData] = useState({
    post_type: '',
    title: '',
	  content: '',

	  categories: '',
	  tags: '',
  });

  useEffect(() => {
    console.log('form data', formData);
  }, [formData]);

  const { post_type, title, content, tags, categories } = formData;

  const onChange = (event: any) => {
    const { name, value, type } = event.target;
    // Check if the input is a file input (type "file")
	//   if(type==='file') {
	// 	debugger
    //   // Set the "featured_image" property to the selected file
    //   setFormData({ ...formData, [name]: event.target.files[0] });
    // } else {
      // For regular inputs and textareas, update the form data as usual
      setFormData({ ...formData, [name]: value });
    }
  

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
	  event.preventDefault();
 


    createPost({ post_type, title, content, tags, categories })
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
    title,
    content,
	  post_type,
	  tags,
	  categories,
    isLoading,
    onChange,
    onSubmit,
  };
}
