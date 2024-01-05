import BasePage from "@/app/components/BasePage";
import Card from "@/app/components/Card";

export async function generateMetadata({ params }: any) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/${params.slug}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })

  // const { results } = await res.json()

  const prettySlug = params.slug.replace(/-/g, " ");
  const title = `Dropshipping Tutorial Posts with a ${prettySlug} post type`,
    description = `Browse dropshipping tutorials by ${prettySlug}.`;
  return {
    title: title,
    description: description,
    // image: post.mobile_image || post.featured_image,
    alternates: {
      canonical: `https://www.importlio.com/ecommerce-tutorials/post-types/${params.slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      // image: post.mobile_image || post.featured_image
    },
  };
}
export default async function Page({ params }: any) {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/post-types/${slug}`);

  const { results } = await res.json();
  let prettySlug = slug.replace(/-/g, " ");
  // capitalize first letter of each word
  prettySlug = prettySlug.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  return (
    <BasePage
      title={`${prettySlug} Dropshipping Tutorials`}
      subtitle={`Browse dropshipping tutorials by ${prettySlug}.`}
      headline={`${prettySlug}`}
      shadowText={`${prettySlug} Tutorials`}
      size="md"
    >
      <div className="flex-wrap w-full max-w-[90vw] mx-auto mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center py-10 ">
        {results &&
          results.map((post: any, idx: any) => <Card key={idx} post={post} />)}
      </div>
    </BasePage>
  );
}
