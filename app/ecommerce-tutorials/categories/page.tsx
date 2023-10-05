
export default async function Page() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/categories/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const { results } = await res.json()

  return (
    <>
        <h1>
        categories
        </h1>
        <ul>
            {results.map((post:any) => (
                             <li key={post.id}><a href={`/ecommerce-tutorials/categories/${post.slug}`}>{post.name}</a></li>

            ))}

        </ul>
    </>
  )
}
