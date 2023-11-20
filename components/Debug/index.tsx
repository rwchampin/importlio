"use client";
import { 
  useAppSelector,
  useAppDispatch,
 } from "@/redux/hooks";

import useAuth from "@/hooks/use-auth";
import LogoBlack from "../common/LogoBlack";
import { toggleDebug } from "@/redux/features/debug/debugSlice";


const DebugToggle = () => {
  const dispatch = useAppDispatch();
  const { debugMode } = useAppSelector((state) => state.debug);

  const toggleDebugMode = () => {
    dispatch(toggleDebug());
  };
  return (
    <div
     className="fixed bottom-6 right-6 z-[99999999]"
      onClick={toggleDebugMode}
     >
      <LogoBlack />
    </div>
  );
};

export default function Debug() {
  // if process.env.NODE_ENV !== "development" return null;
  const isProduction = process.env.NODE_ENV === "production";
  const { debugMode } = useAppSelector((state) => state.debug);
  const {
    user,
    isAuthenticated,
    isLoading
  }:any = useAuth();

  const UserSection = () => {
    const fields = [
      {
        key: "email",
        label: "Email",
        value: user?.email,
      },
      {
        key: "isActive",
        label: "isActive",
        value: user?.isActive ? "true" : "false",
      },
      {
        key: "isStaff",
        label: "isStaff",
        value: user?.isStaff ? "true" : "false",
      },
    ];
    
    return (
      <div className="bg-gray-100 text-center rounded-lg w-auto">
      <h3 className="text-2xl">User</h3>
      <div className="flex gap-2 text-center items-center justify-center">
        {fields.map((field) => (
          <div key={field.key} className="bg-gray-300 p-2 rounded-lg">
            <h4 className="text-lg">{field.label}</h4>
            <p className="text-sm">{field.value}</p>
          </div>
        ))}
      </div>
      </div>
    );

  }

  return (
    <>
      {!isProduction && <DebugToggle />}
      {debugMode && (
      <div className="debug-panel z-[99999999] bg-gray-200 shadow-xl rounded-xl flex flex-col gap-5 fixed bottom-6 w-3/4 left-1/2 p-5">
        <UserSection />

        </div>
      )}
    </>
  );
}
