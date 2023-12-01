// next js route handler
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
    // get query params
    const searchParams = request.nextUrl.searchParams
    const q = searchParams.get('search');


    // call api to get data
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?search=${q}`);

    // get data
    const data = await res.json();

    // return data
    return NextResponse.json({ posts: data });
}