import BasePage from "@/app/components/BasePage";
import Card from "@/app/components/Card";

const unslugify = (slug: string) => {
  const prettySlug = slug.replace(/-/g, " ");
  // capitalize first letter of each word
  return prettySlug.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export async function generateMetadata({ params }: any) {
  const prettySlug = unslugify(params.slug);
  const title = `Dropshipping Tutorial posts by ${prettySlug}`;
  const description = `Browse ecommerce tutorials by ${prettySlug}.`;
  return {
    title: title,
    description: description,
    // image: post.mobile_image || post.featured_image,
    alternates: {
      canonical: `https://www.importlio.com/ecommerce-tutorials/categories/${params.slug}`,
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
  let results = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const r = await res.json();
    results = r.results;

  } catch (error) {
    console.log(error);

    return <h5>Something went wrong.</h5>;
  }

  return (
    <BasePage
      title={`Dropshipping Tutorial posts by ${unslugify(slug)}`}
      subtitle={`Browse dropshipping tutorials by ${unslugify(slug)}.`}
      headline="categories"
      shadowText="categories"
    >
      <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:max-w-[90vw] mx-auto">
        {results.length > 0 && results.map((tag: any) => {
          return <Card key={tag.id} post={tag} />;
        })}
      </div>
    </BasePage>
  );
}
