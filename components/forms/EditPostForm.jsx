"use client";
import Form from './Form';
import useEditPost from '@/hooks/useEditPost';
import { useBlog } from '@/store/BlogStore';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function EditPostForm() {
  const { slug } = useParams();
  const store = useBlog();

  const { categories, tags, posts, postTypes } = store;

  // Fetch post data for editing
  const postToEdit = posts.find((post) => post.slug === slug);

  const {
    headline,
    shadow_text,
    subtitle,
    excerpt,
    title,
    content,
    post_type,
    featured_image,
    post_image_1,
    post_image_2,
    post_image_3,
    tags: postTags,
    categories: postCategories,
    isLoading,
    onChange,
    seo_description,
    seo_title,


    onSubmit,
  } = useEditPost();

  // Function to populate form fields with post data
  const populateFormFields = () => {
    if (postToEdit) {
      onChange('headline', {
       "target": {
        "value": postToEdit.headline,
        "name": 'headline',
       }
      });
      onChange('shadow_text',{
        "target": {
        "value": postToEdit.shadow_text,
        "name": 'shadow_text',
        }
      });
      onChange('excerpt', {
        "target": {
        "value": postToEdit.excerpt,
        "name": 'excerpt',
        }
      });
      onChange('title', {
        "target": {
        "value": postToEdit.title,
        "name": 'title',
        }
        });
      onChange('content', {
        "target": {
        "value": postToEdit.content,
        "name": 'content',
        }
      })
      onChange('post_type', {
        "target": {
        "value": postToEdit.post_type,
        "name": 'post_type',
        }

      })
      onChange('featured_image', {
        "target": {
        "value": postToEdit.featured_image,
        "name": 'featured_image',
        }
      })
      onChange('post_image_1', {
        "target": {
        "value": postToEdit.post_image_1,
        "name": 'post_image_1',
        }
      })
      onChange('post_image_2', {
        "target": {
        "value": postToEdit.post_image_2,
        "name": 'post_image_2',
        }
      })
      onChange('post_image_3', {
        "target": {
        "value": postToEdit.post_image_3,
        "name": 'post_image_3',
        }
      })
      onChange('tags', {
        "target": {
        "value": postToEdit.tags,
        "name": 'tags',
        }
      })
      onChange('categories', {
        "target": {
        "value": postToEdit.categories,
        "name": 'categories',
        }

      })
    }
  };

  // useEffect(() => {
  //   populateFormFields(); // Populate form fields on initial load
  // }, [ populateFormFields ]);

  // useEffect(() => {
  //   populateFormFields(); // Populate form fields when postToEdit changes
  // }, [postToEdit]);

  // Rest of the code...

  let config=[
    {
        data: store.postTypes,
        labelText: 'Post Type',
        labelId: 'post_type',
        type: 'select',
        "value": post_type,
        onChange: onChange,
        required: true,
        placeholder: 'Post Type',
    },
    {
        labelText: 'Headline',
        labelId: 'headline',
        type: 'text',
        "value": headline,
        onChange: onChange,
        required: true,
        placeholder: 'Headline',
    },
    
    {
        labelText: 'Title',
        labelId: 'title',
        type: 'text',
        value: title,
        onChange: onChange,
        required: true,
        placeholder: 'Title',
    },
    {
        labelText: 'Featured Image',
        labelId: 'featured_image',
        type: 'file',
        value: featured_image,
        onChange: onChange,
        required: true,
        placeholder: 'Featured Image',
    },
    {

        labelText: 'Subtitle',
        labelId: 'subtitle',
        type: 'text',
        value: subtitle,
        onChange: onChange,
        required: true,
        placeholder: 'Subtitle',
    },
    {

        labelText: 'Shadow Text',
        labelId: 'shadow_text',
        type: 'text',
        value: shadow_text,
        onChange: onChange,
        required: true,
        placeholder: 'Shadow Text',
    },
    {

        labelText: 'Excerpt',
        labelId: 'excerpt',
        type: 'textarea',
        value: excerpt,
        onChange: onChange,
        required: true,
        placeholder: 'Excerpt',
    },
    {
        labelText: 'Post Image 1',
        labelId: 'post_image_1',
        type: 'file',
        value: post_image_1,
        required: false,
        placeholder: 'Image',
    },
    {
        labelText: 'Post Image 2',
        labelId: 'post_image_2',
        type: 'file',
        value: post_image_2,
        required: false,
        placeholder: 'Image',
    },
    {
        labelText: 'Post Image 3',
        labelId: 'post_image_3',
        type: 'file',
        value: post_image_3,
        required: false,
        placeholder: 'Image',
    },
    {
        data: store.tags,
        labelText: 'Tags',
        labelId: 'tags',
        type: 'multiselect',
        value: tags,
        onChange: onChange,
        required: true,
        placeholder: 'Tags',
    },
    {
        data: store.categories,
        labelText: 'Categories',
        labelId: 'categories',
        type: 'multiselect',
        value: categories,
        onChange: onChange,
        required: true,
        placeholder: 'Categories',
    },
    {
        labelText: 'Post Content',
        labelId: 'content',
        type: 'richtext',
        value: content,
        onChange: onChange,
        required: true,
        placeholder: 'Post Content',
    },
    {

        labelText: 'SEO Title',
        labelId: 'seo_title',
        type: 'text',
        value: seo_title,
        onChange: onChange,
        required: true,
        placeholder: 'SEO Title',
    },
    {

        labelText: 'SEO Description',
        labelId: 'seo_description',
        type: 'textarea',
        value: seo_description,
        onChange: onChange,
        required: true,
        placeholder: 'SEO Description',
    },
     
];


  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText={'Update Post'}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
