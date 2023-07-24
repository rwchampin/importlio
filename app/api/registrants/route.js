import { NextResponse } from "next/server";

export async function POST() {


  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/registrants/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
