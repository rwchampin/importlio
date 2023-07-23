import { RequireAuth } from '@/components/utils';
import { Sidebar, Dashboard } from '@/components/auth/'

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
	<RequireAuth>
		 <div className="bg-blue-300 flex flex-col-reverse md:flex-row gap-5 w-full flex-1">
            <Sidebar />
            <Dashboard>
                {children}
            </Dashboard>
        </div>
	</RequireAuth>
	);
}
