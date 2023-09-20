
import RequireAuth from "@/components/utils/RequireAuth";

import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

import AppProvider from "@/components/utils/AppProvider";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    // <RequireAuth>
      <AppProvider>
        <div className="bg-gray-300 p-5 flex flex-col-reverse md:flex-row gap-5 w-full h-[calc(100vh-4rem)] z-100 relative">
          <Sidebar data-enter />
          <Dashboard data-enter>{children}</Dashboard>
        </div>
      </AppProvider>
    // </RequireAuth>
  );
}
