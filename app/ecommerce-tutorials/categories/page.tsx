import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Dropshipping Categories",
  description: "A list of all the categories used in our Amazon dropshipping tutorials",
  keywords: [
    "Amazon dropshipping",
    "Product importer",
    "Shopify store integration",
    "Amazon affiliates",
    "Amazon associates",
    "Dropshipping automation",
  ],
}
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
        Dropshipping Categories
        </h1>
        <ul>
            {results.map((post:any) => (
                             <li key={post.id}><a href={`/ecommerce-tutorials/categories/${post.slug}`}>{post.name}</a></li>

            ))}

        </ul>
    </>
  )
}
