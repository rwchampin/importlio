// "use client"
import BasePage from "@/app/components/BasePage";
import ListGrid from "@/app/components/email-lists/ListGrid";
import ClientContent from "./ClientContent";
// import { Button } from "@nextui-org/react"
// import { 
//   toggleModal
// } from '@/redux/features/modal/modalSlice'
// import { useAppDispatch } from "@/redux/hooks";

export default function Page() {
 
  // const dispatch = useAppDispatch()
  // const  handleClick = () => {
  //     dispatch(toggleModal())
  // }

  // const belowSubtitle = () => {

  //   return (
  //     <Button onClick={handleClick}>Subsccribe!</Button>
  //   )
  // }
  return (
    <BasePage
        title="1000 Free Email Subscribers"
            headline="Join today for"
          subtitle="No strings attached. Join our subscriber list & say hello to 1k new customers!"
        shadowText="Free Email Lists"
        // belowSubtitle={belowSubtitle}
  >

      <ClientContent  />
  

        </BasePage>
  )
}
