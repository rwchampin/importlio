import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest, { params }: { params: { postslug: string } }) {
    const { postslug } = params
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${postslug}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const results = await res.json()
    
    return NextResponse.json(results)
  }