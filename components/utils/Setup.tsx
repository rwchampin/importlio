"use client";

import { useVerify } from "@/hooks";


import { Toaster } from "react-hot-toast";

export default function Setup() {
  useVerify();

  return <Toaster />;
}
