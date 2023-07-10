import { BlogList } from '@/components/pages'
import { useActivationMutation } from '@/redux/features/authApiSlice';

export default function Page() {

    const posts = fetch('http://localhost:8000/api/posts', (posts) => {
        debugger
    })
    return <BlogList />
}