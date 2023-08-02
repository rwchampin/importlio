import { RequireAuth } from "@/components/utils";
import { Sidebar, Dashboard } from "@/components/auth/";
import Scene from "@/components/animation/Scene";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  console.log(children)
  return (
    // <RequireAuth>
    <div className="bg-gray-300 p-5 flex flex-col-reverse md:flex-row gap-5 w-full min-h-[calc(100vh-4rem)] z-100 relative">
        <Sidebar data-enter />
        <Dashboard data-enter>{children}</Dashboard>
    </div>
    // </RequireAuth>
  );
}
