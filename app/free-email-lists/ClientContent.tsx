"use client";

import ListGrid from "@/app/components/email-lists/ListGrid";

export default function ClientContent() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <ListGrid />
    </>
  );
}
