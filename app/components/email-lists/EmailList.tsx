import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import {  Chip } from "@nextui-org/react";
export default function EmailList({ list }: any) {
  return (
    <div className="email-list flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] justify-between rounded-xl shadow-xl bg-gray-100 p-3 items-stretch">
      {!list && <Spinner />}
      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-heading-4">{list.name}</h3>
          <Chip variant="dot" color="success">{list.emails} contacts</Chip>
        </div>
        <p className="text-gray-500 text-xs">{list.description}</p>
      </div>
      <Link 
        href={`/email-lists/${list.slug}`}
 className="bg-button text-offwhite mt-3 h-input rounded-xl flex items-center justify-center">
        Download List
      </Link>
    </div>
  );
}
