"use client";
import { useAppSelector } from "@/redux/hooks";

export default function Banner() {
  const { banner } = useAppSelector((state) => state.core);

  if (!banner) return null;

  return (
    <p className="flex py-3 uppercase items-center justify-center bg-gray-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
      <span className="flex flex-row items-center gap-2">
        <span className="text-lg">{banner.title}</span>
        <span className="text-base">
          &mdash;
          {banner.message}
        </span>
      </span>
    </p>
  );
}
