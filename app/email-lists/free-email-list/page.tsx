"use client"
import BasePage from "@/app/components/BasePage";
import { Button } from "@nextui-org/react"
import { 
  toggleModal
} from '@/redux/features/modal/modalSlice'
import { useAppDispatch } from "@/redux/hooks";

// import dynamic from 'next/dynamic'
// import { Suspense } from 'react'
// const FreeLists = dynamic(() => import('@/app/email-lists/free-email-list/FreeLists'))
export default function FreeList() {
  const dispatch = useAppDispatch()
  const  handleClick = () => {
      dispatch(toggleModal())
  }

  const belowSubtitle = () => {

    return (
      <Button onClick={handleClick}>Subsccribe!</Button>
    )
  }
  return (
    <BasePage
        title="1000 Free Email Subscribers"
            headline="Join today for"
          subtitle="No strings attached. Join our subscriber list & say hello to 1k new customers!"
        shadowText="Free Email Lists"
        belowSubtitle={belowSubtitle}
  >
      {/* <Suspense fallback={<div>Loading...</div>}>
        <FreeLists />
      </Suspense> */}
        

        </BasePage>
  )
}
