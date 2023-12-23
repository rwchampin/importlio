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
                background: "#fca5a5",

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
