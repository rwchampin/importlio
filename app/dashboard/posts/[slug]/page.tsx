import PostForm from "@/components/forms/PostForm";

export default async function Page({ params: { slug } }: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}/`);
  let post = await res.json();

 

  return <PostForm post={post} />;
}
