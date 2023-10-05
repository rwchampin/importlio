import BasePage from '@/app/components/BasePage'
import Card from '@/app/components/Card'
export default async function Page({ params }: any) {
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const { results } = await res.json()

  return (
    <BasePage
      title='Tags'
      subtitle='Browse ecommerce tutorials by tag.'
      headline='Tags'
      shadowText='Tags'
    >
        <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center py-10 ">

    {results.map((tag: any) => {
      return (
       <div
          className="flex flex-col justify-between items-center w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg py-5 px-10"
          key={tag.id}
       >
         <Card key={tag.id} post={tag} />
        </div>
      )
    }
    )}
        
    </div>
    </BasePage>
  )
}
