import { NextResponse } from 'next/server'

export async function GET(req) {
    const res = await req.json();
    debugger
    return NextResponse.json({ data });
}
