"use client";
import useEditPost from "@/hooks/useEditPost";
import Form from "@/components/forms/Form";
import PostPreview from "@/app/components/PostPreview";
import {
  getTags,
  getCategories,
  getPostTypes,
} from "@/lib/api";
interface Props {
  post?: any;
}

export default function PostForm({ post }: Props) {
  const { formData, isLoading, onChange, onSubmit } = useEditPost(post);
  debugger
  const config = [
    {
      label: "Post Status",
      name: "post_status",
      type: "select",
      value: formData.post_status,
      onChange: onChange,
      required: true,
      placeholder: "Post Status",
    },
    {
      label: "Headline",
      name: "headline",
      type: "text",
      value: formData.headline,
      onChange: onChange,
      required: true,
      placeholder: "Headline"
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      value: formData.title,
      onChange: onChange,
      required: true,
      placeholder: "Title"
    },
    {
      label: "Subtitle",
      name: "subtitle",
      type: "text",
      value: formData.subtitle,
      onChange: onChange,
      required: true,
      placeholder: "Subtitle"
    }, {
      label: "Shadow Text",
      name: "shadow_text",
      type: "text",
      value: formData.shadow_text,
      onChange: onChange,
      required: true,
      placeholder: "Shadow Text"
    }, {
      label: "Content",
      name: "content",
      type: "richtext",
      value: formData.content,
      onChange: onChange,
      required: true,
      placeholder: "Content"
    },
    {
      label: "SEO Title",
      name: "seo_title",
      type: "text",
      value: formData.seo_title,
      onChange: onChange,
      required: true,
      placeholder: "SEO Title"
    },
    // {
    //   label: "Categories",
    //   name: "categories",
    //   type: "multiselect",
    //   value: formData.categories,
    //   onChange: onChange,
    //   required: true,
    //   placeholder: "Categories",
    //   data: getCategories()
    // }, {
    //   label: "Tags",
    //   name: "tags",
    //   type: "multiselect",
    //   value: formData.tags,
    //   onChange: onChange,
    //   required: true,
    //   placeholder: "Tags",
    //   data: getTags()
    // }, 
    {
      label: "SEO Description",
      name: "seo_description",
      type: "textarea",
      value: formData.seo_description,
      onChange: onChange,
      required: true,
      placeholder: "SEO Description"
    }
  ]

  return (
   <div className="flex gap-3">
     <Form
      config={config}
      isLoading={isLoading}
      btnText="Update Post"
      onSubmit={onSubmit}
      onChange={onChange}
    />
    <PostPreview
      {...formData}
     />
    </div>
  );
}
