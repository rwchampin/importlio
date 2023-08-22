import { Sidebar, Dashboard } from "@/components/auth/";


interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (

        <div className="bg-gray-300 p-5 flex flex-col-reverse md:flex-row gap-5 w-full h-[calc(100vh-4rem)] z-100 relative">
          <Sidebar data-enter />
          <Dashboard data-enter>{children}</Dashboard>
        </div>

  );
}
