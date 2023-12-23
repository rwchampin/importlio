import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest) {
    const access = req.cookies.get('access')
    const refresh = req.cookies.get('refresh')
    console.log('access',access)
    console.log('refresh',refresh)
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/get-user`, {
      next: { revalidate: 0 }, // Revalidate every 60 seconds
    })

    const users = await res.json()

    return NextResponse.json(users)
  }