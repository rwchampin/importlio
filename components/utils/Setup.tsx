"use client";
import { useVerify } from "@/hooks";
import Notification from "@/components/Notifications";
import GA from "@/components/utils/GA";

function Setup() {
  // const dispatch = useAppDispatch();
  useVerify();
  



  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('/api/posts/all', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     const { results} = await res.json()

  //     dispatch(setPosts(results))
  //   }

  //   getData()
  // }, [])

  return <><Notification /></>;
}

export default Setup;
