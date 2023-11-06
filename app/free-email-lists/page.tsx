"use client"
import BasePage from "@/app/components/BasePage";
import Link from "next/link";
// import { Button } from "@nextui-org/react"
// import { 
//   toggleModal
// } from '@/redux/features/modal/modalSlice'
// import { useAppDispatch } from "@/redux/hooks";
const BelowSubtitle = () => {

  return (
    <Link href="/auth/register?free=true" className="bg-button text-offwhite w-full max-w-xl flex h-input items-center justify-center rounded-xl">
      Start for FREE!
    </Link>
  )
}
export default function Page() {
 
  // const dispatch = useAppDispatch()
  // const  handleClick = () => {
  //     dispatch(toggleModal())
  // }

 
  return (
    <BasePage
        title="1000 Free Email Subscribers"
            headline="Join today for"
          subtitle="No strings attached. Join our subscriber list & say hello to 1k new customers!"
        shadowText="Free Email Lists"
        belowSubtitle={<BelowSubtitle />}
  >


  

        </BasePage>
  )
}
