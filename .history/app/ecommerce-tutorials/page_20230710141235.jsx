import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';

export default async function Page() {

    const url = `${
        process.env.NEXT_PUBLIC_HOST
    }/api/posts`;

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': ''
        },
    })
    const data = await res.json();
    debugger
    return <BlogList />
}