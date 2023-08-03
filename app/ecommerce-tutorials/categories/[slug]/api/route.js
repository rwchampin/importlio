import { NextResponse } from "next/server";
import { useParams } from 'next/navigation';

export default async function GET(req, res) {
    const { slug } = useParams();

    const postsRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const postsData = await postsRes.json()
    const posts = postsData.results;

    return NextResponse.json(posts);

}
