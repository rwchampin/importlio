import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Home } from "@/components/pages";
import { Title } from "@/components/typography";
import { useGetBlogPostsQuery } from '@/redux/features/blogPostsApiSlice';

export const metadata: Metadata = {
  title: "Full Auth | Home",
  description: "Full Auth home page",
};

const DynamicParticleText = dynamic(
  () => import("@/components/typography/ParticleText"),
  { ssr: false }
);

export default function Page() {
  const data = useGetBlogPostsQuery();
  debugger
  return <Home />;
}
