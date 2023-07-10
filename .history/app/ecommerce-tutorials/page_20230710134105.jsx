import { BlogList } from '@/components/pages'
export default function Page() {
    const posts = fetch('http://localhost:8000/api/posts', (posts) => {
        debugger
    })
    return <BlogList />
}