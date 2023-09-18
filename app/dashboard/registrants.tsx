
import { getRecentPosts } from "@/lib/api";
const preload = async () => {
  void getRecentPosts();
};
export default async function Page() {
    const registrants:any = await preload();
  return (
    <table>
        <thead>
            <tr>
                {Object.keys(registrants[0]).map((key) => (
                    <th>{key}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {registrants.map((registrant:any) => (
                <tr>
                    {Object.values(registrant).map((value:any) => (
                        <td>{value}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}
