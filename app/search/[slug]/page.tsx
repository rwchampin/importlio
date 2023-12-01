import BasePage from "@/app/components/BasePage";

import Card from "@/app/components/Card";

export default async function Page({ params }: { params: { slug: string } }) {

    const { slug } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?search=${slug}`);
    const { results } = await res.json();

    if (!results.length) {
        return <div>Not Found</div>
    }

    const Subtitle = ({text}:any) => (
    <span className="uppercase">{text}</span>
    )
  return (
    <BasePage
        title={`Importlio Search Results`}
        subtitle={<Subtitle text={slug.replace(/-/g, ' ')} />}
        headline={`Search Results for ${slug}`}
        shadowText={`Search Results for ${slug}`}
        showPostsInFooter={false}
        size="md"
        >
      <ul
        className="flex flex-col gap-5 p-5"
        >
        {results.map((post: any) => (
            <Card post={post} />
        ))}
      </ul>
    </BasePage>
  )
}
