"use client";

// import { useEffect } from 'react'
import { useVerify } from "@/hooks";

import { Toaster } from "react-hot-toast";
// import { useAppDispatch } from "@/redux/hooks";
// import { setPosts } from "@/redux/features/blog/blogSlice";

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

  return <Toaster />;
}

export default Setup;
