import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Home } from "@/components/pages";
import { Title } from "@/components/typography";
import { useGetBlogPostsQuery } from '@/redux/services/blogPostsApiSlice';

 
const DynamicParticleText = dynamic(
  () => import("@/components/typography/ParticleText"),
  { ssr: false }
);



export default function Page() {

  return <Home />;
}
