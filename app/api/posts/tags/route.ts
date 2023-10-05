import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/tags`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    const { results } = await res.json()
    
    return NextResponse.json(results)
  }