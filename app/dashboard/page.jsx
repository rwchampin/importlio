import Registrants from "@/components/pages/Registrants"
import BlogList from "@/app/_components/BlogList"
import { AnalyticsProvider } from "@/store"
export default function Page() {

    return (


           <>
            <div className="bg-gray-5 rounded-xl p-5 shadow-xl flex-1 h-1/2">

<AnalyticsProvider>
<Registrants />
</AnalyticsProvider>
</div>
<div className="bg-gray-5 rounded-xl p-5 shadow-xl flex-1 h-1/2">
<BlogList />
</div>

</>


    )
}