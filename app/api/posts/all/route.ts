import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'



export async function GET(request:NextRequest) {
  // get slug from query params
  const searchParams = request.nextUrl.searchParams
  let page:any = searchParams.get('page')

  if(!page) {
    page = 1;
  }

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?page=${page}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const posts = await res.json()
    
    return NextResponse.json({ posts: posts })
  }