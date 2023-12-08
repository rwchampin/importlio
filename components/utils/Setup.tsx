"use client";
import GA from "@/components/utils/GA";
import Notification from "@/components/Notifications";
import { useVerify } from "@/hooks";

function Setup() {
  useVerify();

  return (
    <>

        <GA />

      <Notification />
    </>
  );
}

export default Setup;
