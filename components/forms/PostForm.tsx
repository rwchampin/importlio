"use client";
import useEditPost from "@/hooks/useEditPost";
import Form from "@/components/forms/Form";
import PostPreview from "@/app/components/PostPreview";

interface Props {
  post?: any;
}

export default function PostForm({ post }: Props) {
  const { formData, isLoading, onChange, onSubmit } = useEditPost(post);

  const config = [
    {
      labelText: "Post Status",
      labelId: "post_status",
      type: "select",
      value: formData.post_status,
      onChange: onChange,
      required: true,
      placeholder: "Post Status",
      defaultSelectedKeys: [formData.post_status],
      data: [
        { value: "draft", label: "Draft" },
        { value: "published", label: "Published" },
      ]
    },
    {
      labelText: "Headline",
      labelId: "headline",
      type: "text",
      value: formData.headline,
      onChange: onChange,
      required: true,
      placeholder: "Headline"
    },
    {
      labelText: "Subtitle",
      labelId: "subtitle",
      type: "text",
      value: formData.subtitle,
      onChange: onChange,
      required: true,
      placeholder: "Subtitle"
    }, {
      labelText: "Shadow Text",
      labelId: "shadow_text",
      type: "text",
      value: formData.shadow_text,
      onChange: onChange,
      required: true,
      placeholder: "Shadow Text"
    }, {
      labelText: "Content",
      labelId: "content",
      type: "richtext",
      value: formData.content,
      onChange: onChange,
      required: true,
      placeholder: "Content"
    }, {
      labelText: "SEO Title",
      labelId: "seo_title",
      type: "text",
      value: formData.seo_title,
      onChange: onChange,
      required: true,
      placeholder: "SEO Title"
    }, {
      labelText: "SEO Description",
      labelId: "seo_description",
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
