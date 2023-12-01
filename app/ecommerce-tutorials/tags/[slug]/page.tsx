import BasePage from '@/app/components/BasePage'
import Card from '@/app/components/Card'


export async function generateMetadata({ params }: any) {

  // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/${params.slug}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })

  // const { results } = await res.json()

  const prettySlug = params.slug.replace(/-/g, ' ')
  const title = `Dropshipping Tutorial posts tagged with ${prettySlug}`,
    description = `Browse ecommerce tutorials by ${prettySlug}.`
  return {
    title: title,
    description: description,
    // image: post.mobile_image || post.featured_image,
    alternates: {
      canonical: `https://www.importlio.com/ecommerce-tutorials/tags/${params.slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      // image: post.mobile_image || post.featured_image
    },
  }
}
export default async function Page({ params }: any) {
  const { slug } = params

  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const { results } = await res.json()
  let prettySlug = slug.replace(/-/g, ' ')
  // capitalize first letter of each word
  prettySlug = prettySlug.replace(/\w\S*/g, function (txt: string) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
  return (
    <BasePage
      title={`Dropshipping Tutorial posts tagged with ${prettySlug}`}
      subtitle={`Browse dropshipping tutorials by ${prettySlug}.`}
      headline='Tags'
      shadowText='Tags'
      size='md'
    >
        <div className="flex-wrap w-full mb-10 flex flex-col gap-5 md:flex-row items-stretch justify-center py-10 ">

    {results.map((tag: any, i:any) => {
      return (
        <div
          key={i}
         className="flex-wrap w-full  flex flex-col gap-5 md:flex-row items-stretch justify-center py-10 "
         >
        {results && results.map((post:any, idx:any) => <Card key={idx} post={post} />)}
    </div>
      )
    }
    )}
        
    </div>
    </BasePage>
  )
}
