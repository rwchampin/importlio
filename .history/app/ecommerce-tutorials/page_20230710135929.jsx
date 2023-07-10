import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';

export default function Page() {

    const url = `${
        process.env.NEXT_PUBLIC_HOST
    }/api/posts`;

    const posts = fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return <BlogList />
}