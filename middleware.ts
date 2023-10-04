
import { NextRequest, NextResponse } from 'next/server'


export function middleware(req: NextRequest) {
    console.log('middleware.ts: ', req)
    debugger
    const nextUrl = req.nextUrl
    if (nextUrl.pathname === '/dashboard') {
        console.log('middleware.ts: ', req)
    //   if (req.cookies.authToken) {
    //     return NextResponse.rewrite(new URL('/auth/dashboard', req.url))
    //   } else {
    //     return NextResponse.rewrite(new URL('/public/dashboard', req.url))
    //   }
    }
  }