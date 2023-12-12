"use client";
import GA from "@/components/utils/GA";
import Notification from "@/components/Notifications";
import { useVerify } from "@/hooks";
import { Toaster } from "react-hot-toast";
function Setup() {
  useVerify();

  return (
    <>

        <GA />
        <Toaster />
      <Notification />
    </>
  );
}

export default Setup;
