import type { NextApiRequest, NextApiResponse } from 'next';
export default async function GET() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/recent`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const resJson = await res.json();

    return resJson.results;
}