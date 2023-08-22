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

const PostPreview: React.FC<PostPreviewProps> = ({
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
}) => {
  return (
    <div className="flex w-1/2 flex-col gap-y-6 bg-gray-3 rounded-xl p-5">
      <section>
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
        {categories.length > 0 &&
          categories.map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        {tags.length > 0 &&
          tags.map((tag, index) => <span key={index}>{tag}</span>)}
        <h3>{shadow_text}</h3>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </section>
    </div>
  );
};

export default PostPreview;
