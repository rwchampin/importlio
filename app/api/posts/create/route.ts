// next js route handler
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
    // get post data
    const res = await request.json();

    // create post in db
    const resp = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
    });

    const post = await resp.json();
    // return data
    return NextResponse.json({ post });
}