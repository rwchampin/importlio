"use client";
import { useState, useEffect } from "react";
import useEditPost from "@/hooks/useEditPost";
import Form from '@/components/forms/Form';

import PostPreview from "@/app/components/PostPreview";
import { useParams } from "next/navigation";

export default function EditPostForm() {
  const { slug } = useParams();
  const {
    formData,
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
      label: field.replace("_", " ").charAt(0).toUpperCase() + field.slice(1),
      name: field,
      type: field.includes("image") ? "file" : "text",
      value: formData[field],
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
        if (fieldConfig.name === name) {
          return { ...fieldConfig, value };
        }
        return fieldConfig;
      })
    );

    // Call the onChange handler from the hook
    hookOnChange(e);
  };

  useEffect(() => {
    if (formData) {
      setConfig(getInitialConfig());
    }
  }, [formData]);

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
        {...formData}
      />
    </div>
  );
}
