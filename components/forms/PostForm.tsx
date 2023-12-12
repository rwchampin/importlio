"use client";
import useEditPost from "@/hooks/useEditPost";
import Form from "@/components/forms/Form";
import { getTags, getCategories, getPostTypes } from "@/lib/api";
import Spinner from "@/app/components/Spinner";

import Link from "next/link";
interface Props {
  post?: any;
}

const RewriteForm = () => {
  return <div className="flex flex-col gap-3">fdsfds</div>;
};
export default function PostForm({ post }: Props) {
  const { formData, isLoading, onChange, onSubmit } = useEditPost(post);

  if (!formData) {
    return (
      <Spinner lg showText>
        Loading Post Form
      </Spinner>
    );
  }
  // console.log(formData)
  let config = [
    // {
    //   label: "Theme",
    //   name: "theme",
    //   type: "select",
    //   value: formData.theme,
    //   onChange: onChange,
    //   required: true,
    //   placeholder: "Post Theme",
    //   data: [{
    //     value: "Light",
    //     id: "light"
    //   }, {
    //     value: "Dark",
    //     id: "dark"
    // }],
    // },

    {
      label: "Headline",
      name: "headline",
      type: "text",
      value: formData.headline || "",
      onChange: onChange,
      required: true,
      placeholder: "Headline",
      data: null,
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      value: formData.title || "",
      onChange: onChange,
      required: true,
      placeholder: "Title",
      data: null,
    },
    {
      label: "Subtitle",
      name: "subtitle",
      type: "text",
      value: formData.subtitle || "",
      onChange: onChange,
      required: true,
      placeholder: "Subtitle",
      data: null,
    },
    {
      label: "Shadow Text",
      name: "shadowText",
      type: "text",
      value: formData.shadowText || "",
      onChange: onChange,
      required: true,
      placeholder: "Shadow Text",
      data: null,
    },
    {
      label: "Content",
      name: "content",
      type: "richtext",
      value: formData.content || "",
      onChange: onChange,
      required: true,
      placeholder: "Content",
      data: null,
    },

    {
      label: "Categories",
      name: "categories",
      type: "multiselect",
      value: formData.categories || [],
      onChange: onChange,
      required: true,
      placeholder: "Categories",
      data: getCategories,
    },
    {
      label: "Tags",
      name: "tags",
      type: "multiselect",
      value: formData.tags || [],
      onChange: onChange,
      required: true,
      placeholder: "Tags",
      data: getTags,
    },
    {
      label: "SEO Title",
      name: "seo_title",
      type: "text",
      value: formData.seo_title || "",
      onChange: onChange,
      required: true,
      placeholder: "SEO Title",
      data: null,
    },
    {
      label: "SEO Description",
      name: "seo_description",
      type: "textarea",
      value: formData.seo_description || "",
      onChange: onChange,
      required: true,
      placeholder: "SEO Description",
      data: null,
    },
  ];

  return (
    <div className="flex gap-3">
      <div>
        <Link
            className="bg-button text-white h-input w-full rounded-lg flex items-center justify-center"
         href={`/dashboard/posts/rewrite/${post.slug}`}>Rewrite</Link>

          <Form
            config={config}
            isLoading={isLoading}
            btnText="Update Post"
            onSubmit={onSubmit}
            onChange={onChange}
          />
      </div>
    </div>
  );
}
