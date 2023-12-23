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
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "#a5f3a5",
                color: '#0a450a',
                border: '1px solid #1cb91c'
              },
            },
            error: {
              style: {
                background: "#fca5a5",
                color: '#450a0a',
                border: '1px solid ##b91c1c'
              }
            },
          }}
        />
      <Notification />
    </>
  );
}

export default Setup;
