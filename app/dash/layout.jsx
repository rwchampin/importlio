import { Sidebar, Dashboard } from '@/components/auth/'

export default function DashboardLayout({children}) {

    return (
        <div className="bg-blue-300 flex flex-col-reverse md:flex-row gap-5 w-full flex-1">

            <Sidebar />
            <Dashboard>
                {children}
                </Dashboard>

        </div>
    )
}


 