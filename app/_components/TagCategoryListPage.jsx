import { TagCloud } from "@/components/common";
import { BasicPage } from "@/components/pages";
import { capitalizeFirstLetter } from "@/utils/string";

export default async function TagCategoryListPage({ type }) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${type}/list/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await res.json()
    const items = json.results;

   

    return (
       <BasicPage
        title={`${capitalizeFirstLetter(type)} List`}
        subtitle={`List of ${type}`}
        shadowText={`List of ${type}`}
        headline={`List of ${type}`}
       >
         <div className="flex items-center justify-center flex-auto">
            <TagCloud data={items} type={type} />
        </div>
         </BasicPage>
    )
}