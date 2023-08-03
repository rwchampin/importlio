export default async function Page( ) {

    const postRes = await fetch(`https://importlio.com/api/posts/post-types/${slug}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const posts =  postRes.json().results

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

