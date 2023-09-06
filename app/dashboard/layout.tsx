
import { RequireAuth } from "@/components/utils";

import { Sidebar, Dashboard } from "@/app/dashboard";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    // <RequireAuth>
        <div className="bg-gray-300 p-5 flex flex-col-reverse md:flex-row gap-5 w-full h-[calc(100vh-4rem)] z-100 relative">
         <Sidebar data-enter />
          <Dashboard data-enter>{children}</Dashboard> 
        </div>
    // </RequireAuth>
  );
}
