// next js route handler
import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

 

export async function GET(request: NextRequest) {
    // call api to get data
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/ai/assistants`);

    // get data
    const { results } = await res.json();

    // return data
    return NextResponse.json({ assistants:results });
}



// export async function GET(request:NextRequest) {
//   // get slug from query params
//   const searchParams = request.nextUrl.searchParams
//   let page:any = searchParams.get('page')

//   if(!page) {
//     page = 1;
//   }

//     const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?page=${page}`, {
//       next: { revalidate: 60 }, // Revalidate every 60 seconds
//     })
//     const posts = await res.json()
    
//     return NextResponse.json({ posts: posts })
//   }