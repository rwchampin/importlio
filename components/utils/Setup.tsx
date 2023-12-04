"use client";
import GA from "@/components/utils/GA";
import Notification from "@/components/Notifications";
import { useVerify } from "@/hooks";
import { Suspense } from "react";

function Setup() {
  useVerify();

  return (
    <>
      <Suspense>
        <GA />
      </Suspense>
      <Notification />
    </>
  );
}

export default Setup;
