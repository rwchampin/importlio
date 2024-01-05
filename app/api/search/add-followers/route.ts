// next js route handler
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {

    const q = ''

    // call api to get data
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/?search=${q}`);

    // get data
    const data = await res.json();

    // return data
    return NextResponse.json({ posts: data });
}