// next js route handler
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
    // get post data
    const res = await request.json();
    console.log('res', JSON.stringify(res));
    // call api to get data
    const apiRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/social/add-followers/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
    });

    // get data
    const data = await apiRes.json();

    return NextResponse.json({ 'message': 'success' });
}