import { BasicPage } from "@/components/pages";

export default function Page({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    return <BasicPage 
    title={'post page'}>My Page</BasicPage>
  }