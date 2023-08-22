"use client";

import Image from "next/image";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useCreatePost } from "@/hooks";
import { toast } from "react-toastify";

import { Form } from "@/components/forms";

interface Props {
	  post?: any;
	  postTypes: any;
	  categories: any;
	  tags: any;
}
export default function PostForm({
	post,
	postTypes,
	// categories,
	// tags,
}: Props) {
	const [config, setConfig] = useState<any>([
		{
		  data: [
			{
			  label: "Draft",
			  name: "draft",
			},
			{
			  label: "Published",
			  name: "published",
			},
		  ],
		  labelText: "Post Status",
		  labelId: "status",
		  type: "select",
		  value: status,
		  onChange: onChange,
		  required: true,
		  placeholder: "Post Status",
		},
		{
		  data: postTypes,
		  labelText: "Post Type",
		  labelId: "post_type",
		  type: "select",
		  value: post_type,
		  onChange: onChange,
		  required: true,
		  placeholder: "Post Type",
		},
		{
		  labelText: "Headline",
		  labelId: "headline",
		  type: "text",
		  value: headline,
		  onChange: onChange,
		  required: true,
		  placeholder: "Headline",
		},
  
		{
		  labelText: "Title",
		  labelId: "title",
		  type: "text",
		  value: title,
		  onChange: onChange,
		  required: true,
		  placeholder: "Title",
		},
		{
		  labelText: "Featured Image",
		  labelId: "featured_image",
		  type: "file",
		  value: featured_image,
		  onChange: onChange,
		  required: true,
		  placeholder: "Featured Image",
		},
		{
		  labelText: "Subtitle",
		  labelId: "subtitle",
		  type: "text",
		  value: subtitle,
		  onChange: onChange,
		  required: true,
		  placeholder: "Subtitle",
		},
		{
		  labelText: "Shadow Text",
		  labelId: "shadow_text",
		  type: "text",
		  value: shadow_text,
		  onChange: onChange,
		  required: true,
		  placeholder: "Shadow Text",
		},
		{
		  labelText: "Excerpt",
		  labelId: "excerpt",
		  type: "textarea",
		  value: excerpt,
		  onChange: onChange,
		  required: true,
		  placeholder: "Excerpt",
		},
		{
		  data: tags,
		  labelText: "Tags",
		  labelId: "tags",
		  type: "multiselect",
		  value: tags,
		  onChange: onChange,
		  required: true,
		  placeholder: "Tags",
		},
		{
		  data: categories,
		  labelText: "Categories",
		  labelId: "categories",
		  type: "multiselect",
		  value: categories,
		  onChange: onChange,
		  required: true,
		  placeholder: "Categories",
		},
		{
		  labelText: "Post Content",
		  labelId: "content",
		  type: "richtext",
		  value: content,
		  onChange: onChange,
		  required: true,
		  placeholder: "Post Content",
		},
		{
		  labelText: "SEO Title",
		  labelId: "seo_title",
		  type: "text",
		  value: seo_title,
		  onChange: onChange,
		  required: true,
		  placeholder: "SEO Title",
		},
		{
		  labelText: "SEO Description",
		  labelId: "seo_description",
		  type: "textarea",
		  value: seo_description,
		  onChange: onChange,
		  required: true,
		  placeholder: "SEO Description",
		},
	  ]);
	  
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
    onChange,
    onSubmit,
  } = useCreatePost();

   


	  const setExistingPostData = useCallback((post: any) => {
		const updatedConfig = [...config]; // Create a copy of the config array
	  
		updatedConfig.forEach((configVal: any) => {
		  const postValue = post[configVal.labelId]; // Get the corresponding value from the post object
		  if (postValue !== undefined) {
			configVal.value = postValue;
		  }
		});
	  
		// Update the state with the modified config
		setConfig(updatedConfig);
	  }, [config, setConfig]);

  useEffect(() => { 
    if (post) {
      setExistingPostData(post);
    }
  }, [post, setExistingPostData]);

  useEffect(() => {
    window.addEventListener("onbeforeunload", function (e) {
      e.preventDefault();
			  confirm("are you sure you want to leave?")
    });

    return () => {
      window.removeEventListener("onbeforeunload", function (e) {
        e.preventDefault();
        alert("are you sure you want to leave?");
      });
    };
  }, []);
 

  return (
    <div className="flex gap-5">
      <div className="flex w-1/2 flex-col gap-y-6  bg-gray-3 rounded-xl p-5  ">
        <Form
          btnText={"create Post"}
          config={config}
          onSubmit={onSubmit}
          isLoading={isLoading}
          onChange={onChange}
        />
      </div>

      <div className="flex w-1/2 flex-col gap-y-6  bg-gray-3 rounded-xl p-5  ">
        <section>
          <h2>Preview</h2>
          <h1>SEO Data</h1>
          <h4>{seo_title}</h4>
          <p>{seo_description}</p>
          <hr />
          <p>{excerpt}</p>
        </section>
        <section>
          <div className="relative w-full h-96">
            {featured_image && (
              <Image
                src={featured_image}
                alt={title}
                fill
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>{headline}</div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {categories.length > 0 &&
            categories.map((category: any, index: number) => {
              return <span key={index}>{category}</span>;
            })}
          {tags.length > 0 &&
            tags.map((tag: any, index: number) => {
              return <span key={index}>{tag}</span>;
            })}
          <h3>{shadow_text}</h3>

          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </section>
      </div>
    </div>
  );
}
