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

  return <><GA GA_MEASUREMENT_ID={"G-V8X4P8V5SZ"} /><Notification /></>;
}

export default Setup;
