"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useEditPost } from "@/hooks";
import { Form } from "@/components/forms";
import PostPreview from "@/app/components/PostPreview";
import { useParams } from "next/navigation";

export default function EditPostForm() {
  const { slug } = useParams();
  const {

    post_type,
    headline,
    title,
    subtitle,
    status,
    shadow_text,
    excerpt,
    content,
    featured_image,
    categories,
    tags,
    seo_title,
    seo_description,
    isLoading,
    onChange: hookOnChange,
    onSubmit,
  } = useEditPost(slug);

  const getInitialConfig = () => {
    const fields = [
      "status",
      "post_type",
      "headline",
      "title",
      "featured_image",
      "subtitle",
      "shadow_text",
      "excerpt",
      "tags",
      "categories",
      "content",
      "seo_title",
      "seo_description",
    ];

    return fields.map((field) => ({
      labelText: field.replace("_", " ").charAt(0).toUpperCase() + field.slice(1),
      labelId: field,
      type: field.includes("image") ? "file" : "text",
      value: post[field],
      onChange: hookOnChange,
      required: field === 'title' || field === 'content' ? true : false,
      placeholder: field.replace("_", " "),
    }));
  };

  const [config, setConfig] = useState(() => getInitialConfig());

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the config state
    setConfig((prevConfig) =>
      prevConfig.map((fieldConfig) => {
        if (fieldConfig.labelId === name) {
          return { ...fieldConfig, value };
        }
        return fieldConfig;
      })
    );

    // Call the onChange handler from the hook
    hookOnChange(e);
  };

  useEffect(() => {
    if (post) {
      setConfig(getInitialConfig());
    }
  }, [post]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "are you sure you want to leave?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="flex gap-5">
      <div className="flex w-1/2 flex-col gap-y-6 bg-gray-3 rounded-xl p-5">
        <Form
          btnText={"Update Post"}
          config={config}
          onSubmit={onSubmit}
          isLoading={isLoading}
          onChange={handleOnChange}
        />
      </div>
      <PostPreview
        seo_title={seo_title}
        seo_description={seo_description}
        excerpt={excerpt}
        featured_image={featured_image}
        title={title}
        headline={headline}
        subtitle={subtitle}
        categories={categories}
        tags={tags}
        shadow_text={shadow_text}
        content={content}
      />
    </div>
  );
}
