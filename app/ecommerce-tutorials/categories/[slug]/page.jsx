import { useFetch } from '@/hooks';

export default async function Page({ params: { slug }}) {
    const {loading, data, error} = useFetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    debugger
    const postsData = await postsRes.json()
    const posts = postsData.results;

    return (
        <div className="flex flex-col gap-5 md:flex-row md:items-center justify-center shrink-0">
              {posts.map((post, idx) => (
                <div key={idx} className="flex flex-col gap-5 md:flex-row md:items-center justify-center shrink-0">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center justify-center shrink-0">
                        {post.title}
                    </div>
                </div>
                ))}

        </div>
    );
}

