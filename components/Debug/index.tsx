import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";




export default function Debug() {
  const { modalOpen } = useAppSelector((state) => state.modal);
  const { user } = useAppSelector((state) => state.auth);
  const [modalState, setModalState] = useState<any>(modalOpen)
  const [userState, setUserState] = useState<any>(user)
  useEffect(() => {
    setModalState(modalOpen)
  }, [modalOpen])

 
  return (
    <div className="debug-panel z-[99999999] bg-gray-200 shadow-xl rounded-xl flex flex-col gap-5 fixed bottom-6 w-3/4 left-1/2 p-5">
      Modal is {modalState ? "open" : "closed"}
      <br />
      User is {userState && userState.is_admin ? "admin" : "not admin"}
    </div>
  );
}
