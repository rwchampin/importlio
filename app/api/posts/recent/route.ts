import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?limit=3`)
    const {results} = await res.json()
    return NextResponse.json({posts: results})
  }