"use client";
import Notification from "@/components/Notifications";
import GA from "@/components/utils/GA";
import { useVerify } from "@/hooks";
import Hotjar from '@hotjar/browser';
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const siteId = 3711939;
const hotjarVersion = 6;


function Setup() {
  useVerify();
  
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);

    
  }, []);
  

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
