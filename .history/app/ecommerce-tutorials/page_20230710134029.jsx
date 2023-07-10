import { BlogList } from '@/components/pages'
export default function Page() {
    const posts = fetch('/api/posts', (posts) => {
        debugger
    })
    return <BlogList />
}