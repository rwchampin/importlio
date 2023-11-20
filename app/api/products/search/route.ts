import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('q')

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/products/?search=${query}`)

    const { results } = await res.json()
    
    return NextResponse.json({ products: results })
  }