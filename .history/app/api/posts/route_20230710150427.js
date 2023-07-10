import { NextResponse } from 'next/server'

export async function GET() {
    debugger
    const res = await fetch('http://localhost:8000/api/posts/', {
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    const data = await res.json();
    debugger;
    return NextResponse.json({ data });
}
