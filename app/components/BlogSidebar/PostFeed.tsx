 

export default async function PostFeed( ) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?limit=3`)
  const { results } = await res.json()

  return (
    <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center py-10 ">

    {results.map((tag: any) => {
      return (
       <div
          className="flex flex-col justify-between items-center w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg py-5 px-10"
          key={tag.id}
       >
        {tag.title}
        </div>
      )
    }
    )}
        
    </div>
  )
}
