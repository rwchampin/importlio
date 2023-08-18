import Registrants from "@/components/pages/Registrants"
import BlogList from "@/app/components/BlogList"
export default function Page() {

    return (


           <>
            <div className="bg-gray-5 rounded-xl p-5 shadow-xl flex-1 h-1/2">

<Registrants />
</div>
<div className="bg-gray-5 rounded-xl p-5 shadow-xl flex-1 h-1/2">
<BlogList />
</div>

</>


    )
}