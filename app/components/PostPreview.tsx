import Image from "next/image";

interface PostPreviewProps {
  seo_title: string;
  seo_description: string;
  excerpt: string;
  featured_image: string;
  title: string;
  headline: string;
  subtitle: string;
  categories: string[];
  tags: string[];
  shadow_text: string;
  content: string;

}

const PostPreview: React.FC<PostPreviewProps> = ({ post }:any) => {
  let obj:any = {};

  Object.keys(post).forEach((key) => {
    if (key === "categories" || key === "tags") {
      obj[key] = post[key].map((item:any) => item.name);
    } else {
      obj[key] = post[key];
    }
  })

  const {
    seo_title,
    seo_description,
    excerpt,
    featured_image,
    title,
    headline,
    subtitle,
    categories,
    tags,
    shadow_text,
    content,
  } = obj;

  return (
    <div className="flex w-1/2 flex-col gap-y-6 bg-gray-100 rounded-xl p-5">
      <section className="p-3 bg-gray-400 rounded-xl">
        <h2>Preview</h2>
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
        {categories && categories.length > 0 &&
          categories.map((category:any, index:any) => (
            <span key={index}>{category.name}</span>
          ))}
        {tags && tags.length > 0 &&
          tags.map((tag:any, index:number) => <span key={index}>{tag.name}</span>)}
        <h3>{shadow_text}</h3>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </section>
    </div>
  );
};

export default PostPreview;
