import BasePage from '@/app/components/BasePage'
import Card from '@/app/components/Card'
export default async function Page({ params }: any) {
  const { slug } = params
  debugger
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
        <div className="flex-wrap w-full  flex flex-col gap-5 md:flex-row items-stretch justify-center py-10 ">
        {results && results.map((post:any, idx:any) => <Card key={idx} post={post} />)}
    </div>
      )
    }
    )}
        
    </div>
    </BasePage>
  )
}
