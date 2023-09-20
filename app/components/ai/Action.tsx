"use client";

import Button from "@/app/components/buttons/Button";
export default function Action({
  name,
  callback,
}: {
  name: string;
  callback: () => any;
}) {
  return (
    <Button variant="solid" size="sm" className="w-full" onClick={callback}>
      {name}
    </Button>
  );
}
